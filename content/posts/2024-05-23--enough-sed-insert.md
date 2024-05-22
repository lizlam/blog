---
title: Enough sed - insert and append
date: "2024-05-23"
template: "post"
draft: false
slug: "/posts/enough-sed-ins"
category: "sed"
description: "How to insert with sed."
---

Let's take a look at our `test.txt` file with the following content:
```
sad
happy
awake
coffee
work
school
```

If we want to *insert* the word `breakfast` before `coffee`, we would do the following:
```
$ sed '/coffee/i breakfast' test.txt
sad
happy
awake
breakfast
coffee
work
school
$
```

We can also *append* the word `breakfast` after `coffee` with the following:
```
$ sed '/coffee/a breakfast' test.txt
sad
happy
awake
coffee
breakfast
work
school
$
```

Note that this does not change the original `test.txt` file.
