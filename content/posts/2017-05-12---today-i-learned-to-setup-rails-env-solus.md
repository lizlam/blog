---
title: "Today I Learned How to Setup a Rails Environment on Solus"
date: "2017-05-12"
template: "post"
draft: false
slug: "/posts/til-setup-rails-solus"
category: "Solus"
description: "Today I learned how to set up a Rails development environment on Solus."
---

*Today I Learned* how to set up a Rails development environment on Solus.  I've been running the [Solus distribution](https://solus-project.com/) for a couple of months now.  I wanted to move over some of my local development environments from my Fedora laptop.  This is a little bit of a challenge if you're used to mainstream Linux distributions (mainstream Linux seems like a bit of a oxymoron) with familiar tools such as apt or yum.  Solus is pretty new and not forked from another distro.  It has its own packaging system called 'eopkg'.  These are the steps I had to take to get a Rails environment up and running and deployed using Heroku.

First I had to install all the packages needed to get Rails up and running:   
     
`sudo eopkg install -c system.devel`    
`sudo eopkg install ruby-devel`    
`sudo eopkg install sqlite3-devel`    
`sudo eopkg install nodejs`    
`sudo gem install rails`   

Since I was using postgres, I also had to run the following:

`sudo eopkg install postgresql`    
`sudo eokpkg install postgresql-devel`

All that's left is to download and install the Heroku command line client:

`wget https://cli-assets.heroku.com/branches/stable/heroku-linux-amd64.tar.gz -O heroku.tar.gz`    

`tar zxvf heroku.tar.gz`    
`cd heroku`    
`sudo install`    

After the Heroku client finished installing, I was able to clone my Rails projects and get them up and running.

