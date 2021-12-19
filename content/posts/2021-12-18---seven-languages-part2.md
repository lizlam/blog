---
title: Some Quick Thoughts on Seven Languages in Seven Weeks - Part 2
date: "2021-12-18"
template: "post"
draft: false
slug: "/posts/seven-languages-part2"
category: "blogs"
description: "Some more quick thoughts as I continue to work through Seven Languages in Seven Weeks by Bruce Tate."
---
This is a continuation of my thoughts on Seven Languages in Seven Weeks by Bruce Tate.    

The Scala chapter of the book so far seems the most familiar to me.  I have a pretty good understanding of 
Java, so I naturally leaned into this language quite a bit more than the others.  This is the
first time I saw `traits` outside of a Rust context (another language I've been trying to learn on the side).
Traits are basically interfaces with implementation.

There are distinct and explicit ways to declare mutable and immutable variables i.e. use `val` for immutable values and `var` for mutable variables.   

A similar approach is used for static classes.  Instead of adding the `static` keyword in front of the class declaration 
(like in Java), Scala uses the keyword `object`.  

One interesting bit in Scala is that XML is valid syntax.  This reminded me a lot of React and JSX. 

The pattern matching with conditions look like a really powerful tool over your basic switch/case statements.    

Example:    
```
def factorial(n: Int): Int = n match {
    case 0 => 1
    case x if x > 0 => factorial(n - 1) * n
}
```

The author's conclusion for Scala is mixed, but I like how you are able to start with object oriented programs and ease your way
into functional paradigms.  Perhaps this allows too much of an escape hatch for a functional programmer's taste?    


**The next chapter is on Erlang.**  

A few of my notes:   
* Statements end in period.
* There is no type coercion.  Example: `1 + "2"` does not work.
* Variables begin with capital letter and immutable.
* Functions use `fun` keyword.
* There is a prolog-based syntax.
* Use the keyword `spawn` to spawn a process.
* Send messages to threads with `Pid ! "message"`.
* Interprocess communication is REALLY easy.

I enjoyed reading about Erlang and doing some of the exercises but I found the syntax to be 
a little awkward.  My first impression is it is not something I would want to work in on a
daily basis.  The author seemed to really like Erlang which makes me want to give
it another try.

So far, Scala seems the most promising in terms of professional development.  I've seen a few 
companies that use Scala though it is not widespread in the industry.  I am looking forward to finishing up the book with the next 2 chapters and see where it takes me.




