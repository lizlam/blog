---
title: 3 Ways to Comment Out Blocks of Code in vi
date: "2019-09-21"
template: "post"
draft: false
slug: "/posts/3-ways-comment-out-vi"
category: "vim"
tags:
  - vi
  - command line
description: "Learn different ways to comment out code in vi."
---

Learning `vi` for the first time can be really intimidating.  The learning curve is a bit high and there are _many_ ways to do _many_ things in this simple yet powerful editor.  There will come a point where you will be comfortable navigating around using the `h` `j` `k` and `l` keys and going between _command_ mode and _insert_ mode will be second nature.  This is where things get real fun and adding more commands to your `vi` toolbox will make you even more productive.  

Have you ever found yourself in `vi` wanting to comment and uncomment blocks of code?  Here are 3 ways to accomplish this.

The Bad Way
-----------
![Using VI ineffeciently](/media/vim-comment-bad.gif)
It may be a little unfair to call this the "bad" way, but it's certainly the most inefficient.  You start your editor, navigate down to the beginning row of the block you want to comment out.  You hit `i` to go into _insert_ mode, enter `//` to comment, hit `ESC` to go back to _command_ mode, hit `j` to navigate down to the next row, and then repeat until all the rows are commented out.    
To uncomment the rows, you do almost the same thing.  Navigate your cursor the beginning of the last row you want to comment.  Hit `xx` to remove the first two characters of the line (in our case the `//` chars), hit `h` to navigate up to the next row, and then repeat until all rows are uncommented.    
Being able to navigate around and insert and remove characters like this is definitely not something to be scoffed at.  It takes time to even get to this point of sufficiency, but there are better ways.  
  
The Better Way
--------------
![Better](vim-comment-better.gif)
Substitution with regular expressions is a powerful tool in `vi`.    
 
While in _command_ mode:
Hit `:` to enter _escape_ mode
Type `11,17s/^/\/\//` and then hit `ENTER`

DONE!    

Woh, woh, woh! What just happened here?    

Let's break it down in some detail.
`11,17` is the range you are interested in.  In this case, lines 11-17.    
`s` stands for substitute.  The next two arguments are separated by `/`, the first being the location or old value and the second being the new value.    
For example:
`s/cat/dog/` takes the first occurrence of the word `cat` and replaces it with the word `dog`.  This will happen for every line.       

Now you may have noticed a little problem.  We are trying to substitute nothing with `//`.  Well "nothing" is really the beginning of each line which is represented with `^` (the caret character).    

So `s/^/dog/` would add the word `dog` to the beginning of each line.  

What about `//`?  Won't `vi` get confused since substitution uses `/` to separate the old value from the new value?  This is where we need to use `\` (forward slash) to escape the double back slashes that represent commenting.    
`/\/\` is the _escaped_ version of `//`.  Escaping these characters tells the command that we _literally_ want to use `/` twice and not to interpret it as a separator for the command.  

We put it all together to get `11,17s/^/\/\//`.    

Uncommenting uses a similar pattern.   

Hit `:` to enter _escape_ mode and enter `11,17s/\/\///`.    

Like before, our range is lines 11-17.  This time our first argument is the escaped version of `//` and the second value is left out.  This literally means we are substituting escaped `//` with nothing, and therefore removing it.     

Phew! That was a lot to cover!  This is definitely a very powerful technique, but like many commands involving regular expressions, it can look very ugly.
    

The Best Way
------------
![Best](vim-comment-best.gif)
There is another mode in `vi` that can be utilized for our task at hand.  Visual block mode allows us to visually block off a section of the editor to perform actions on it.  We first start off by navigating down the beginning of the top row we're interested in.  

Hit `CTRL` + `v` to enter visual block mode.
Use `j` to navigate and block off the beginning of lines 11-17.
Hit `SHIFT` + `i` (capital i) to enter insert mode.
Type `//` and hit `ESC`

Uncommenting is just as simple.    

Hit `CTRL` + `v` to enter visual block mode again.
Navigate and block off the `//`s in lines 11-17.
Hit `x` to delete.

The combination of using visual mode and commands is the most practical and best way to comment and uncomment code.  Apologies to the regex fans out there!   

***NOTE:*** **Visual mode is actually a feature of `vim` and not original `vi`.  Most modern systems actually use `vim` and the binary is either renamed or aliased to `vi`.**

It's hard to believe this is only the tip of iceberg of things that can be accomplished in `vi`.  Getting pass the initial hump is really the hardest part.  More proficiency in `vi` translates to more efficiency and productivity.  I hope this encourages you to explore and have some fun with this awesome little editor.

***DISCLAIMER:*** **The criteria used to place the *Bad*, *Better*, and *Best* judgments are based upon my personal tastes.**

