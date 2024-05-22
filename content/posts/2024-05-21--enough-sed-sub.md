---
title: Enough sed - substitute 
date: "2024-05-21"
template: "post"
draft: false
slug: "/posts/enough-sed-sub"
category: "sed"
description: "How to substitute with sed."
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

If we want to *substitute* the word `coffee` with `water`, we would do the following:
```
$ sed 's/coffee/water/' test.txt
sad
happy
awake
water
work
school
$
```

Note that this does not change the original `test.txt` file.
