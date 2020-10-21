---
title: "A Gentle Introduction to the Git Command Line"
date: "2020-10-06"
template: "post"
draft: false
slug: "/posts/intro-git"
category: "git"
description: "A workshop style introduction to the git command line."
---
Git is a version control system written by Linus Torvalds in 2005. It was created specifically to manage the Linux Kernel Project. One could say it was written by Linux Kernel Developers for Linux Kernel Developers. As a result, the initial environment for working with git is the command line. 

Now, if you're not familiar with the command line (like a Linux Kernel Developer), this can feel scary.  With so many GUI tools out there, you may feel it's not even necessary to learn.  I want to suggest that knowing how the git GUIs work under the hood is super helpful as a developer.  With some diligence and working through this tutorial, you'll be a git command line power user in no time...well with some time.

**NOTE**: I leave out some of the git output for clarity.

## Creating a new git repository

Open a terminal and run the following commands:
```
    $ mkdir project 
    $ cd project
    $ git init
```

What did we just do? 
We just created an empty git repository.

Let take a look at the state of the git workspace:
```
    $ git status
    On branch master

    No commits yet

    nothing to commit (create/copy files and use "git add" to track)
```

## Add a file to our working directory

Type the following command:
```
    $ echo ‘hello world’ > hello.txt
```    
Take a look at the status again:
```
    $ git status
    On branch master

    No commits yet

    Untracked files:
    (use "git add <file>..." to include in what will be committed)

	  hello.txt

    nothing added to commit but untracked files present (use "git add" to track)

```
The status gives us a clue on what we need to do next:
```
    $ git add .
```    
Git knows we have a new file with the *intention* to add it to the repository but we have not committed it yet. This is often a point of confusion for new users.  I think of `git add` like an engagement ring.  It's a promise to commit, but we're not there yet.

Let's take a look at the status again:
```
    $ git status
    On branch master

    No commits yet

    Changes to be committed:
      (use "git rm --cached <file>..." to unstage)

	    new file:   hello.txt

```

## Time to commit

Type the following:
```
    $ git commit -m “Commit first file to the repo”
```
Congratulations! We have made our first commit to the master branch!
How do we know what branch we are currently on? 
```
     $ git branch
     * master
```
## Create a new branch
Type the following in your terminal:
```
    $ git checkout -b dev_llam
      Switched to a new branch 'dev_llam'
```
This will create a new branch and switch to that branch.  
We should be able to see both branches now:
```
    $ git branch
    * dev_llam
      master
```
You may be thinking, "Wait??!! I didn't `cd` into a new directory. How did I switch to a new branch?".   
This can bit a little bit confusing for those coming from other version control systems.  

I think of it like someone pulled the rug out from under me and replaced it with a new one without me ever having to get up. You are physically sitting in the same directory in the filesystem, but the branch has been changed from underneath you.

## Let’s make a change on our new branch.

Edit hello.txt by adding a 2nd line saying who you are.  (Example: “I am Liz.”)
If you check the status, you will see git knows we made changes:
``` 
    $ echo 'I am Liz.' >> hello.txt
    $ cat hello.txt
      hello world
      I am Liz.
    $ git status
    On branch dev_llam
    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git checkout -- <file>..." to discard changes in working directory)

	    modified:   hello.txt

    no changes added to commit (use "git add" and/or "git commit -a")

```  
We want to add our changes:
```
    $ git add .
```    
Now we want to commit them:
```
    $ git commit -m “Saying who I am”
```
## Let's take a look at our history so far.

Type in the terminal:
```
    $ git log --oneline
      187c6fa (HEAD -> dev_llam) Saying who I am
      deccda5 (master) Commit first file to the repo.
```
We now have two commits in our history in our dev branch.

NOTE: The seemingly random characters in front of our commit message is called a commit SHA. This commit SHA includes information about the author and date and will be unique to you. If you are following along on your terminal, don't worry if the output looks a little different.

Let’s check on master:
```
    $ git checkout master
    $ git log --oneline
      deccda5 (HEAD -> master) Commit first file to the repo.
    $ cat hello.txt
      hello world
```
## Time to merge!

We want to merge our changes from dev to master.
Remember, the target branch is always the branch you are on.  Use `git branch` if you are not sure where you are.
```
    $ git merge dev_llam
```   
Now we should see that master has the same changes as our dev branch.
```
    $ git log --oneline
      187c6fa (HEAD -> master, dev_llam) Saying who I am
      deccda5 Commit first file to the repo.
    $ cat hello.txt
      hello world
      I am Liz.
```
## What about cloning?

Open another terminal window and clone the repo we just created:
```
    $ git clone /path/to/git/project project2
```
You should see an exact copy of what we had in the original project:
```
    $ cd project2
    $ git log --oneline 
      187c6fa (HEAD -> master, dev_llam) Saying who I am
      deccda5 Commit first file to the repo.
    $ cat hello.txt 
```
## What about pulling?

To keep our repo updated, we need to pull from the original/remote.

Go to the *first* terminal window with the original project open and make a change and commit it.  
```
   $ echo 'I love coffee!' >> hello.txt
   $ git add .
   $ git commit -m "Add line about my love of caffeine."
```

Go back to the *second* terminal window with project2 open and check its status:
```
    $ git status
    On branch master
    Your branch is up to date with 'origin/master'.

    nothing to commit, working tree clean
```
That's interesting.  Didn't we just make a change in the original project?!? Our cloned project (project2) does not know it is out of date with the original.
That is because we need to *fetch* the changes (note: fetching is different from pulling).
```
    $ git fetch origin master
    $ git status
      On branch master
      Your branch is behind 'origin/master' by 1 commit, and can be fast-forwarded.
        (use "git pull" to update your local branch)

      nothing to commit, working tree clean

```    
Great! Now our repo is updated...but our working directory is not.
This is because fetching only updates our local repo, while pulling will fetch and merge it into our local workspace.
As the git output suggest, let's pull!
```
    $ git pull
    $ git log --oneline
      fb58b27 (HEAD -> master, origin/master, origin/HEAD) Add line about my love of caffeine.
      187c6fa (origin/dev_llam) Saying who I am
      deccda5 Commit first file to the repo.
```

Yay! We’re done! We have successfully pulled the coffee change from a remote repo.

If you've made it this far, you are a trooper! Congratulations!

You now know how to:
* Create a new git repository
* Add and commit files to a repo
* Create and merge branches
* Clone a repository
* Fetch and pull changes

Hopefully this was an insightful glimpse of the things possible with `git` and the command line at your finger tips.

