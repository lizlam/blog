---
title: Copy Your Modified Files in Git with 1 line
date: "2019-05-15"
template: "post"
draft: false
slug: "/posts/copy-modified-files-git"
category: "git"
description: "Copy off all your modified files and start over in git."
tags: 
  - command line
  - bash
---

For one reason or another, I occasionally find myself in a place where I want to copy off all my modified files in my local git repository and start over.  This is usually due to painful merges where I just want a fresh start.  This is the one-liner you can use to do just that: 


`git status --porcelain=v1 | awk {'print $2'} | xargs -I {} cp -r {} ../dir_with_changed_files`

Let's break down each part of this line in detail.

`git status --porcelain=v1`

You may be familiar with `git status`, adding the `--porcelain=v1` flag just changes the output from this:

![git status image](/media/git_status.png)

to this:

![git status porcelain image](/media/git_status_porcelain.png)


`awk {'print $2'}`

This awk command will print the 2nd column of [standard out](https://linux.die.net/man/3/stdout) (i.e. what is printed on the screen).  In our case, this will print out the column with the file names from the previous `git status --porcelain=v1` command.

`xargs -I {} cp -r {} ../dir_with_changed_files`    

This portion of the command utilizes the [xargs](http://man7.org/linux/man-pages/man1/xargs.1.html) tool which allows iteration over things coming from standard input.  In this case, standard input for the `xargs` command is the standard output from the previous `awk` command.  Which take the list of files and copies it to the `../dir_with_changed_files` directory.
