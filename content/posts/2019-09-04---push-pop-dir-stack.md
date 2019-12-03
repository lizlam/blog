---
title: Push & Pop Your Way Through the Directory Stack
date: "2019-09-04"
template: "post"
draft: false
slug: "/posts/push-pop-dir-stack"
category: "bash"
published: true
description: How to use pushd, popd and dirs.
---

If you are a command line user, there's no doubt that you are familiar with the `cd` command.  If not, it's just a way to navigate up and down a directory tree in your file system.  In addition to using the `cd` command, you can also use the builtin directory stack.    
    
How can I use this directory stack you speak of???    
    
It's easy! Let's start by opening up your terminal and viewing the stack with the `dirs` command.   

`$ dirs`    
`~`

As you see, the stack currently contains one directory and in this case `~` which is shorthand for the home directory.    

Now instead of `cd`ing to another directory, use `pushd`:    

`$ pushd alpha`    
`~/alpha ~`    

Much like the `cd` command, `pushd` changed the directory you are currently in *but* also pushed the directory onto the directory stack.    

Let's push another directory on the stack.    

`$ pushd ~/beta`    
`~/beta ~/alpha ~`    

And another.

`$ pushd ~/gamma`     
`~/gamma ~/beta ~/alpha ~`     

As you can see, new values are being inserted in front of the list and this the top of the stack.  By keeping track of the directories of where you've been, the stack also acts like a bookmark for you to refer back to. 

If you prefer to see the stack in a more traditional top down view, use the `-p` flag with the `dirs` command:

`$ dirs -p`     
`~/gamma`    
`~/beta`    
`~/alpha`     
`~`

I know what you're thinking?  

*OK, Liz.  That's nice but how is that really different than just using the `cd` command.*   
   
Well now that you have a record of where you've been, you can pop directories off the stack.   

`$ popd`    
`~beta ~/alpha ~`

Now you are back in the `beta` directory and you can use `popd` to navigate all the way back down the stack to your original home directory.    

Perhaps you're thinking now, *"What if I want to go directory from the `gamma` directory to the `alpha` directory?"*    

Ok, let's back up a minute and push the `gamma` directory back onto the stack.    

`$pushd ~/gamma`    
`~/gamma ~/beta ~/alpha ~`

Every directory on the directory stack also has a index associated with it.  You can view it but using the `-v` flag:    

`$ dirs -v`    
`0 ~/gamma`    
`1 ~/beta`    
`2 ~/alpha`    
`3 ~`    

You can also directly access the directory name using `+N` flag.
For example, to access what is in the `2` index of the directory stack, execute:    

`$ dirs +2`    
`~/alpha`

This will echo the directory name but not navigate there.  You can pop directories by index like this:    

`$ popd +2`  

This will remove the `alpha` directory from the stack as well as change your current working directory.   

Unfortunately, if you are on Mac or Windows and using something like Git Bash, this appears to be broken.  In this case, we can use our old pal, `cd`.
  
`$ cd $(dirs -l +2)`

In conclusion, `pushd`, `popd`, and the `dirs` commands are great additions to your toolbox.  I find them especially useful if the paths are long with deeply nested sub-directories.  If you find yourself always `cd`ing to the same paths, give these commands a try. 

   


