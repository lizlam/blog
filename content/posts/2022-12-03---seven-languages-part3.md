---
title: Some Quick Thoughts on Seven Languages in Seven Weeks - Part 3
date: "2022-12-03"
template: "post"
draft: false
slug: "/posts/seven-languages-part3"
category: "blogs"
description: "Quick thoughts on Clojure as I continue to work through Seven Languages in Seven Weeks by Bruce Tate."
---
This is a continuation of my thoughts on Seven Languages in Seven Weeks by Bruce Tate.    

"Clojure and Java desperately need each other.  Lisp needs the market place that the Java Virtual Machine can offer, and the Java community needs a serious update and an injection of fun."

It's been a little while and was able to pick up this book again.  I was excited to learn a bit about Clojure since I know Uncle Bob (aka Robert Martin) is a big fan.  It's interesting to read the above quote since at the time of reading this chapter in 2022 (the book was writtenin 2010), the bit about the Java community needing an update and injection of fun still feels true.  

Time has been at a premium for me but I wanted to jot down some quick notes on this chapter.

* Function args are separated by spaces.    
  Example: `(+ 1 1)` evaluates to 2.
* Clojure uses prefix notation.    
Examples:   
`(+ 2 2 2 2)` evaluates to 8.    
`(- 8 1 2 )` evaluates to 5.    
`(< 1 2 3 4)` evaluates to true.    
`(< 1 3 2 4)` evalutes to false.    

* Clojure coerces types.    
Example:
`(+ 3.0 5)` evaluates to 8.0.
* Use 'str' to concatenate strings.    
Example:
`(str "name, " "date, " "age.")` evaluates to "name, date, age."

This is how you do an `if`:   
`(if true (println "it's true!"))` prints "it's true!".

If you want an `else` add a third argument:
`(if true (println "it's true!") (println "false))` still prints "it's true!".

* `0` and `""` are true, `nil` is not true.  This is weird!
* Use keyword `def` to define variables.
* Use keyword `defn` to define functions.
* The simplest form of a function is: `(defn [params] body)`

This is an example of a "Hello World" program in Clojure using functions.

`(defn hello [name] (str "Hello, " name))`

Invoke this with: `(hello "liz")` and the output will be "Hello, liz".


