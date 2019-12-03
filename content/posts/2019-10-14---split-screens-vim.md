---
title: How to Split Screens in vim
date: "2019-10-14"
template: "post"
draft: false
slug: "/posts/split-screens-vim"
category: "vim"
tags:
  - vi
description: "Have you ever found yourself going through a long file in `vim` and wishing you could split your screen?
tags: vim,"
---

Have you ever found yourself going through a long file in `vim` and wishing you could split your screen?  Perhaps you want to make some comparison with a chunk at the top of file with something in the middle.  With a few keystrokes you can do exactly that.

##Split Horizontally

![Horizontal Screen Split](/media/vim-split-screen-h.gif)

To split the screen horizontally:
a.) Hit `CTRL` + `w` 
b.) and then `s`.

If you want to navigate between the screen:
a.) Hit `CTRL` + `w` 
b.) and then `w`.  

To exit out of one of the screen:
a.) Go into command mode (i.e. hit `ESC`)
b.) and quit as usual: `:q`. 

##Split Vertically

![Vertical Screen Split](/media/vim-split-screen-v.gif)

To split the screen vertically, much like splitting horizontally:
a.) Start by hitting `CTRL` + `w`
b.) but then hit `v` (instead of `s`).  

Navigating between the split screens is the same (`CTRL` + `w` + `w`). 

Though horizontal splitting works great.  I find vertical splitting to be the most useful.

##Combine Both

![Vertical and Horizontal Screen Split](/media/vim-split-screen-b.gif)

Why choose?  It is possible to combine both horizontal and vertical screen splitting as well.
