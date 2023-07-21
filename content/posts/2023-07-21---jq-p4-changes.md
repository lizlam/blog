---
title: Use jq to format p4 changes output to JSON
date: "2023-07-21"
template: "post"
draft: false
slug: "/posts/jq-p4-changes"
category: "blogs"
description: "Create JSON formatted data from p4 changes output."
---

I recently ran across [this blog](https://til.simonwillison.net/jq/git-log-json) showing how to use `jq` to format `git log` output to JSON.  Curious about `jq` and wanting to try a similar thing with Perforce, I was able to modify the example pretty easily.

This is what `p4 changes` output looks like:

```
$ p4 changes

Change 3 on 2023/07/20 by grepliz@test-local-01 'Add day1.pdf'
Change 2 on 2023/07/20 by grepliz@test-local-01 'Add crazy.psd.'
Change 1 on 2023/07/20 by grepliz@test-local-01 'Populated server with files '
```

Here is how you can format to JSON using `jq`:

```
$ p4 changes | jq -R -s '[split("\n")[:-1] | map(split("\u0020")) | .[] | { "change": .[1], "author": .[5], "date": .[3], "message": .[6:length] | join(" ") }]'

[
  {
    "change": "3",
    "author": "grepliz@test-local-01"
    "date": "2023/07/20",
    "message": "'Add day1.pdf'"
  },
  {
    "change": "2",
    "author": "grepliz@test-local-01",
    "date": "2023/07/20",
    "message": "'Add crazy.psd.'"
  },
  {
    "change": "1",
    "author": "grepliz@test-local-01",
    "date": "2023/07/20",
    "message": "'Populated server with files '"
  }
]
```

I think the original blog I referred to gives a pretty good explanation of what is going on, but I find it helpful to write out what is going on for future reference.

The input: `p4 changes`
===========================================
I know the output of `p4 changes` is being piped into the `jq` program and it is helpful that the output is delimited by a space character and is one line per changelist.  This output produces the columns needed for programs like `jq` and `awk`.
  
The flags: `jq -R -s` 
=====================
The `jq` flags being used are nicely [documented here](https://jqlang.github.io/jq/manual/).

*--slurp/-s:*
*Instead of running the filter for each JSON object in the input, read the entire input stream into a large array and run the filter just once.*
 
*--raw-input/-R:*
*Don't parse the input as JSON. Instead, each line of text is passed to the filter as a string. If combined with --slurp, then the entire input is passed to the filter as a single long string.*

The `jq` filter
=============================================================

 `'[split("\n")[:-1] | map(split("\u0020")) | .[] | { "change": .[1], "author": .[5], "date": .[3], "message": .[6:length] | join(" ") }]'`

This is where all the magic happens. There are basically 4 sections to this filter.

* `split("\n")[:-1]`

This says to split on newlines. If we were to stop here, we would get an array of the changelists.
Example: 
```
p4 changes | jq -R -s 'split("\n")[:-1]'
[
  "Change 3 on 2023/07/20 by grepliz@test-local-01 'Add day1.pdf'",
  "Change 2 on 2023/07/20 by grepliz@test-local-01 'Add crazy.psd.'",
  "Change 1 on 2023/07/20 by grepliz@test-local-01 'Populated server with files '"
]
```

* `map(split("\u0020"))`

This tells the filter to map and split on the space character.
When combined with #1 above it would look like this:
```
p4 changes | jq -R -s 'split("\n")[:-1] | map(split("\u0020"))'
                                                                    
[
  [
    "Change",
    "3",
    "on",
    "2023/07/20",
    "by",
    "grepliz@test-local-01",
    "'Add",
    "day1.pdf'"
  ],
  [
    "Change",
    "2",
    "on",
    "2023/07/20",
    "by",
    "grepliz@test-local-01",
    "'Add",
    "crazy.psd.'"
  ],
  [
    "Change",
    "1",
    "on",
    "2023/07/20",
    "by",
    "grepliz@test-local-01",
    "'Populated",
    "server",
    "with",
    "files",
    "'"
  ]
]
```

* `.[]`

This creates arrays of the values such that we can iterate over it.  The following is from the documentation:


*Array/Object Value Iterator: .[]*
*If you use the .[index] syntax, but omit the index entirely, it will return all of the elements of an array. Running .[] with the input [1,2,3] will produce the numbers as three separate results, rather than as a single array.**
 
*You can also use this on an object, and it will return all the values of the object.*

```
p4 changes | jq -R -s 'split("\n")[:-1] | map(split("\u0020")) | .[]'

[
  "Change",
  "3",
  "on",
  "2023/07/20",
  "by",
  "grepliz@test-local-01",
  "'Add",
  "day1.pdf'"
]
[
  "Change",
  "2",
  "on",
  "2023/07/20",
  "by",
  "grepliz@test-local-01",
  "'Add",
  "crazy.psd.'"
]
[
  "Change",
  "1",
  "on",
  "2023/07/20",
  "by",
  "grepliz@test-local-01",
  "'Populated",
  "server",
  "with",
  "files",
  "'"
]
```

* `{ "change": .[1], "author": .[5], "date": .[3], "message": .[6:length] | join(" ") }`

Finally, this section gives us the desired JSON shape of each changelist and by wrapping the whole thing (the whole jq filter) with `[]`, we get the final array.  