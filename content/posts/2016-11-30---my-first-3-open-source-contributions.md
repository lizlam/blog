---
title: "My First 3 Open Source Contributions"
date: "2016-11-30"
template: "post"
draft: false
slug: "/posts/my-first-three-open-source-contributions"
category: "Open Source"
description: "Getting started in an open source project can be incredibly intimidating."
---

Getting started in an open source project can be incredibly intimidating.  You may ask yourself questions like:

>  Which project should I get involved with?    
>  How do I get started?   
>  Are the moderators nice?    

You hear stories about [Linus Torvalds' brutal comments](http://www.theregister.co.uk/2016/07/11/linus_torvalds_in_sweary_rant_about_punctuation_in_kernel_comments/) and you don't want to be on the other end of those types of emails.  Well, not every project is the 
Linux Kernel and there are some really great communities out there able and willing to help someone starting out.
I wanted to share my experiences with my first 3 open source contributions.

DuckDuckGo
----------

[DuckDuckGo](https://duckduckgo.com/) is a Google alternative.  The company wants to [provide a search engine](https://duckduckgo.com/about/) that respects your privacy and doesn't
track the user.  They have the notion of an [Instant Answer](https://docs.duckduckhack.com/welcome/how-ias-work.html) which is essentially a result to a search query.  One form of an Instant Answer is a [cheat sheet](https://docs.duckduckhack.com/walkthroughs/programming-syntax.html).  Contributing a cheat sheet to the search platform is a fairly simple way to make your first contribution.  They also have a great community on Slack, where I was personally emailed by their community manager after signing up.  The community manager introduced himself and warmly welcomed me into the group.  This personal touch was really indicative of the type of community being harbored.  

DuckDuckGo also has [fantastic documentation on how to get started](https://docs.duckduckhack.com/).  They use Codio, a cloud IDE which makes [setting up a development environment](https://docs.duckduckhack.com/welcome/setup-dev-environment.html) extremely easy.  I was interested in a contributing a [Perforce](https://www.perforce.com/) cheat sheet where a user can easily find a reference to the command line client.  In a couple of hours, I was able to read through the documentation, set up the environment and make my first contribution.  The community was very attentive and gave friendly feedback.  After a couple of days, my Perforce cheat sheet was on their staging site.  About a week later, it was on the production site.  

So a user can now enter a search like this:

![DuckDuckGo Search](/media/ddg-search.png)

And get results like this:

![Perforce Cheat Sheet](/media/ddg-p4-cheat-sheet.png)

Perforce Patcher
----------------
Not all open source projects are large official projects.  There are many personal projects out there with a sole author willing to accept help and contributions.  The [Perforce Patcher](http://controlspace.info/2016/03/patch-utility-for-perforce/), written by [Buddha Jyothiprasad](https://twitter.com/prbuddha), is JavaFX application that creates patches based on diffs from changelists.  I never had any experience with JavaFX applications but I knew enough Java to read through the code and make basic sense of it.  I wanted to add the ability to start the application with some command line arguments to pre-populate the initial login fields. I made the the change and submitted a [pull request](https://github.com/jbuddha/perforce-patcher/pull/2).  The author was really nice and asked me to update the README with my changes and merged in my commits.       

GitLab 
------
I've been wanting to learn more about the [Ruby on Rails](http://rubyonrails.org/) framework and know that the best way to learn a new tech stack is to delve into a project using ia project's .
GitLab has really thorough [guide on contributing](https://github.com/gitlabhq/gitlabhq/blob/master/CONTRIBUTING.md) and a fairly formalized process.  Their [instructions for setting up a development environment](https://gitlab.com/gitlab-org/gitlab-development-kit) is detailed enough to get started but not overwhelming.  They use an [up-for-grabs](https://gitlab.com/gitlab-org/gitlab-ce/issues?label_name[]=up-for-grabs) label on their issues which can be picked up and fixed by anyone who has the desire to contribute.  My only issue(no pun intended) is that once someone has claimed it, there doesn't seem to be a way to know from the list without drilling down to each individual ticket.  I decided to get my feet wet by fixing an [issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/24554) that required a [simple text change](https://gitlab.com/lizlam/gitlab-ce/commit/5c747ded7ecc1d7da418a854d12ad2906b173b7b).  Picking out low hanging fruit is good way to get acquainted with a project's workflow and development environment.  I submitted my [merge request](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/7553) and the moderators were really responsive and enthusiastic.  After a little back and forth, I made my first GitLab contribution.

Contributing to open source projects is not as scary as it may seem.  There are a lot of friendly and well run projects that are welcoming to the new contributor.  Helping out smaller projects with a sole author is also a great way to collaborate, learn and not reinvent the wheel.  I hope this encourages you to find a project you're interested in and to be unafraid to make that first commit.  
     

