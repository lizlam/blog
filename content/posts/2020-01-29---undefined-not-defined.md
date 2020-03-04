---
title:  Not Defined vs. Undefined in JavaScript
date: "2020-01-29"
template: "post"
draft: false
slug: "/posts/undefined-notdefined"
category: "javascript"
description: "Undefined vs. Not Defined."
---
There are two conditions that are closely worded but mean very different things in JavaScript.  A variable can be *undefined* vs. *not defined*.

Let's open up your browser's console and take a closer look.

Suppose you type `a + b` and hit `ENTER`.  You will see something like the following:

![not defined](/media/not-defined.png)

This `ReferenceError` is telling us that we have not *declared* the variable `a` and therefore it is *not defined*.

Let's declare `a` and see what happens.

![undefined](/media/undefined.png)

The `let` (as well as the `var` and `const`) keyword is used to *declare* a variable but since we have not assigned it an actual value, `a` is *undefined*.

The difference may feel subtle but they really are different things. In one case, `a` doesn't even exist (i.e. not defined) and in the other it does but doesn't have a value. 