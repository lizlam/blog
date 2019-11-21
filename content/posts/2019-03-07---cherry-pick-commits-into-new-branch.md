---
title: How to Cherry Pick Commits into a New Branch
date: "2019-03-07"
template: "post"
draft: false
slug: "/posts/how-to-cherry-pick"
category: "git"
description: "Need to cherry pick a bunch of commits to a new branch?" 
---

Have you ever found yourself in a situation where you needed to cherry pick a bunch of your own commits into a new branch in git?  I personally don't like to use `git cherry-pick` since it's usually a sign that something went wrong, but unfortunately  sometimes it's the only way out of a sticky git situation.  This happened to me recently at work and these were the steps I took to recreate my branch.       

**Step 1**
----------
First I needed to search the list of commits to find the ones that were relevant to me:    
`git log --pretty=format:"%h%x09%an%x09%s" | grep "Liz Lam"`

Woah!? What did you just type you ask?!!??!  Let's look at it in detail.    

 * `git log` gives you a list of commits in a repository.    
 * `--pretty=format:` allows you to format the commits in a way that makes sense to you (or in this case, me).    
 * `%h` prints SHA1 hash (short version) .   
 * `%x09` prints a tab.         
 * `%an` prints the author name.        
 * `%s` prints the summary of the commit.        
    
So put it altogether and `git log --pretty=format:"%h%x09%an%x09%s"` will output something like this:    
```
02705d38d4    Fabien Villepinte    l10n: fr.po Fix some typos from round3    
5a05494049    Fabien Villepinte    l10n: fr.po Fix some typos
ca1b411648    Johannes Schindelin   mingw: safe-guard a bit more against getenv` 
```
I then pipe that into `grep "Liz Lam"` to only get commits by me.
  
**Step 2**
----------
Once of have a list of commits by me, I'll inspect and manually pick the ones I'm interested in.  Let's pretend I came up with a list like this:    

`ff92f85cac`
`c8879ed156`
`b01cb9a3f9`

I then create a new branch and cherry pick the list of SHA1 commits:    
`git checkout -b my_new_branch`  
`git cherry-pick ff92f85cac` 
`git cherry-pick c8879ed156` 
`git cherry-pick b01cb9a3f9` 

Voila! Now I have a newly created branch with my freshly picked commits.

