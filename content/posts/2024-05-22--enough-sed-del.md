---
title: Enough sed - delete
date: "2024-05-22"
template: "post"
draft: false
slug: "/posts/enough-sed-del"
category: "sed"
description: "How to delete with sed."
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

If we want to *delete* the word `sad`, we would do the following:
```
$ sed '/sad/d' test.txt
happy
awake
coffee
work
school
$
```

We can also *delete* a line range.  For example the following will delete lines 5 through 6:
```
$ sed '5,6d' test.txt
sad
happy
awake
coffee
$
```

Note that this does not change the original `test.txt` file.
