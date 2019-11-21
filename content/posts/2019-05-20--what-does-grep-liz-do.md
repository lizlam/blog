---
title: What Does 'grep -liz' Do?
date: "2019-05-20"
template: "post"
draft: false
slug: "/posts/what-does-grep-liz-do"
category: "linux"
description: "I love the grep linux command."
tags: 
  - grep
  - command line
---
I love the `grep` linux command.  It's one of those fundamental commands that I could not live without.  I love it so much that I use the alias 'grepliz' for many of my social media accounts.   

One day as I was just pondering the wonder that is `grep`, I wondered what would `grep -liz` do.    

So here begins the idea of this blog.    

`-l` is for listing out files
=============================

`grep -l` or `grep --files-with-matches` will only show the file names with matches and not every line or occurrence.  For example, suppose we had a file called called `test.txt` with the following content:
```
Hello Grep!
Hello Grep!
```

if you run `grep "Hello" *` in the directory, the results would look like this:
```
$ grep "Hello" *
test.txt:Hello Grep!
test.txt:Hello Grep!
```
However, if you run `grep -l "Hello" *`, you will only get back the file name:
```
$ grep -l "Hello" *
test.txt
```

`-i` is for ignoring case
=========================
    
`grep -i` or `grep --ignore-case`
By default `grep` is case sensitive, using the `-i` flag we make it case *insensitive*.   
For example, let's add another line to the above `test.txt` file so it now contains:    
```
Hello Grep!
Hello Grep!
hello grep!
```

Runnning `grep  -i "Hello" *` will show all 3 lines:
```
$ grep -i "Hello" *
test.txt:Hello Grep!
test.txt:Hello Grep!
test.txt:hello grep!
```

`-Z` is for zgrep
=================
`grep -Z` or `zgrep` will search compressed files.  So let's take our example `test.txt` file and compress it using `gzip`.    
```
$ gzip test.txt 
```

This will produce a compressed file called `test.txt.gz`.
Now if you try to grep it for "Hello", it will not return any results:
```
$ grep "Hello" test.txt.gz

```
Using the  `-Z` flag, grep will act like `zgrep` and uncompress the file to do the search:
```
$ grep -Z "Hello" test.txt.gz
Hello Grep!
Hello Grep!
```

According to the man pages `-z` and `-Z` should do the same thing but my tests showed otherwise.  It appeared that grep wouldn't recognized a lowercase z flag.    

You may be wondering what `-L` or `-I` does.  I will leave that as an exercise for the reader (or perhaps another blog).



