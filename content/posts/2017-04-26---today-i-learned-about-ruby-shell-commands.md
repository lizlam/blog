---
title: "Today I Learned About Running Shell Commands in Ruby"
date: "2017-04-26"
template: "post"
draft: false
slug: "/posts/til-about-ruby-shell-cmd"
category: "Ruby"
tags:
  - "Shell"
description: "Today I learned about running shell commands in Ruby."
---

*Today I Learned* about running shell commands in Ruby.  I'm really familiar with bash and it feels really natural for me to use backticks to run shell commands.  A coworker who was looking over my code got confused by them and asked why I didn't use some other options.  At the very least, backticks can look pretty ugly in your Ruby code and since it confused a fellow coworker, I spent a little time looking at other ways to do it.

**Backticks or %x()**    

It's pretty much the same way you would use them in bash. Simply put backticks around your command and it runs the way one would expect, returning standard output (standard error gets printed to the screen) of the shell command.  You can access the exit value with `$?`.

`irb --simple-prompt` example:    

![Backtick Example](/media/backtick_example.png)

**system**

Input your command as a string (i.e. quote it) to `system`, it returns true if
the exit status is zero, otherwise it returns false.  This is a good method if you don't care about the standard output of the command you're running.

`irb --simple-prompt` example:    

![System Example](/media/system_example.png)

**exec**    

This is replace the current running process (i.e. will not run a new shell) and
runs the command.  I'm not sure when it would be best to use this.  Perhaps when you don't want to fork too many processes?

`irb --simple-prompt` example:    

![Exec Example](/media/exec_example.png)



