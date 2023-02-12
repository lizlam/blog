---
title: Some Quick Thoughts on Seven Languages in Seven Weeks - Part 4
date: "2023-02-11"
template: "post"
draft: false
slug: "/posts/seven-languages-part4"
category: "blogs"
description: "Quick thoughts on Haskell as I finish up Seven Languages in Seven Weeks by Bruce Tate."
---
This is a continuation of my thoughts on Seven Languages in Seven Weeks by Bruce Tate.    

After over a year, I finally finished Seven Langugages in Seven Weeks by Bruce Tate.  The last language explored is Haskell.  A few quick thoughts about Haskell:

* Haskell is a purely functional language but feels a little too academic for me.
* Language has been around since the 1980's.
* Concatenate with `++`
  Example:
    `"hello" ++ "world"` -> "hello world"   

* Strings are just a list/array of characters.
  Example:
    `['a', 'b']` -> 'ab'     

* Booleans are what you expect with slightly different syntax.
  Example:
    `(4+9) == 9`  -> True
    `(5+5) /= 10` -> False   

* `if` is a function not a control structure that returns a value like any other function.
* Haskell is strongly typed.
* Functions have two parts to them, type declaration and then function declaration.
  Example:   
     `double :: Integer -> Integer`   
     `double x = x + x`   

* Classes are not OOP classes.  In Haskell, classes allow for polymorphism and overloading.    
* Instances of a class are types, not date objects.

Although it took more much longer than 7 weeks to get through, this has been a horizon expanding book.  I think I actually understand monads now!  The book also offers an interesting insight about the past and the way trends and languages evolve.  Written in 2010 when Java was still very much dominating and Ruby on Rails was becoming the hot tech stack for startups, it's interesting to see a book about just exploring different languages.  Learning for learning's sake. These days, there is also no shortage of resources to learn just about any language out there no matter how obscure.  In fact there is probably a podcast, video series and Discord community for it.  I may have finally finished the book, but I plan to keep the language exploration going.  Not just because it's another line item on my resume but because it's fun!




