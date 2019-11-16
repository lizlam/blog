---
title: "Today I Learned About the POSIX Locale and Docker" 
date: "2017-06-21"
template: "post"
draft: false
slug: "/posts/til-posix-locale-docker"
category: "Docker"
description: "Today I learned that the default locale for an Ubuntu image in a Docker container is not what I expected."
---

*Today I learned* that the default locale for an Ubuntu image in a Docker container is not what I expected it to be.  I was trying to view some Greek file names in a container and they did not
appear correctly.  I immediately knew there must be something off with locale of the container.

What is a locale? It's how Linux systems determines which language and character set a user sees when they log into a terminal session.  What is the default locale when pulling down a fresh Ubuntu 16.04 image?

    root@4ff94ee1780d:/# locale
    LANG=
    LANGUAGE=
    LC_CTYPE="POSIX"
    LC_NUMERIC="POSIX"
    LC_TIME="POSIX"
    LC_COLLATE="POSIX"
    LC_MONETARY="POSIX"
    LC_MESSAGES="POSIX"
    LC_PAPER="POSIX"
    LC_NAME="POSIX"
    LC_ADDRESS="POSIX"
    LC_TELEPHONE="POSIX"
    LC_MEASUREMENT="POSIX"
    LC_IDENTIFICATION="POSIX"
    LC_ALL=

What??!!  POSIX??!!! What's the POSIX Locale?  The POSIX locale is another name for the C locale  (That's ANSI C not the C Language)  which is another name for "if you expect to see any Unicode characters, haha, the jokes on you" locale.

How to fix this?  Basically you need to add the `locale-gen` program to your container, generate and set the locale to something more appropriate.  This can be accomplished by adding the following to your Dockerfile:

    FROM ubuntu:16.04
    
    RUN apt-get clean && apt-get update
    RUN apt-get install locales
    RUN locale-gen en_US.UTF-8  
    ENV LANG en_US.UTF-8  
    ENV LANGUAGE en_US:en  
    ENV LC_ALL en_US.UTF-8 

After rebuilding my docker image and running it, I "ssh" (start an interactive bash session) into the container to check.

    root@15dc539c6e1c:/# locale
    LANG=en_US.UTF-8
    LANGUAGE=en_US:en
    LC_CTYPE="en_US.UTF-8"
    LC_NUMERIC="en_US.UTF-8"
    LC_TIME="en_US.UTF-8"
    LC_COLLATE="en_US.UTF-8"
    LC_MONETARY="en_US.UTF-8"
    LC_MESSAGES="en_US.UTF-8"
    LC_PAPER="en_US.UTF-8"
    LC_NAME="en_US.UTF-8"
    LC_ADDRESS="en_US.UTF-8"
    LC_TELEPHONE="en_US.UTF-8"
    LC_MEASUREMENT="en_US.UTF-8"
    LC_IDENTIFICATION="en_US.UTF-8"
    LC_ALL=en_US.UTF-8

Looks good.  Finally, I check the previous Greek test files and see that the characters are properly rendered.

    
