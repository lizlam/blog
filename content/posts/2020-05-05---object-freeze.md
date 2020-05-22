---
title: "Make Your Object Unchangeable with Object.freeze()"
date: "2020-05-05"
template: "post"
draft: false
slug: "/posts/object-freeze"
category: "javascript"
description: "Need immutable objects?"
---

One of the things that confused me initially during my JavaScript learning journey was the `const` keyword.  I thought it was akin to `const` in C++ where the declared variable would be immutable. 

This is not the case in JavaScript.

The `const` keyword does not create immutability as the name would imply (i.e. no changes allowed), but actually prevents reassignment.

So how do you make JavaScript objects immutable?

That's where `Object.freeze()` comes in.  It is a way to **freeze** an object and as it implies, a frozen object can not be changed.

Let's look at an example in our browser console.

```
>> const myinfo = { name: "Liz", title: "Frontend Engineer" }
```

Now let's change my title via property access:

```
>> myinfo.title = "Elephant Trainer"
>> myinfo
Object { name: "Liz", title: "Elephant Trainer" }
```

No problem, as long as we not reassigning anything to `myinfo`, my `name` and `title` are mutable for all to change.

Let's say we do something like this:

```
>> const myinfo2 = Object.freeze(myinfo)
```

`Object.freeze(myinfo)` returns the frozen version of `myinfo` to `myinfo2`.  

Now before you break out into a song of "Let it Go", it might not be totally obvious that `myinfo2` is frozen.

`myinfo2.title = "Ballet Dancer"` doesn't throw any errors but upon inspection, you will see nothing has changed.

```
>> myinfo2
Object { name: "Liz", title: "Elephant Trainer" }
```

In conclusion, if you are looking for a way to make objects unchangeable in JavaScript, `const` is not the keyword your are looking for.  Use `Object.freeze()` for your immutability needs.


