---
title: Directories are Folders
date: "2012-08-21"
template: "post"
draft: false
slug: "/posts/directories-are-folders"
category: "Work Culture"
description: "I recently had the opportunity to spend some time with our Girls Inc. marketing intern."
---

I recently had the opportunity to spend some time with our [Girls Inc.](http://www.girlsinc.org/) marketing intern. She is a junior from one of our local high schools and had an interest in getting some hands-on Perforce exposure. I only had an hour so I kept my goals simple. I wanted to teach her how to create her very first "Hello World" shell script, check it into the depot, make edits, and view revision history with some of our tools.

The first thing I asked her to do was to open a terminal window and navigate to a certain directory using the cd command. With a puzzled look, she asked,

"What's a directory?"     
 
"A directory is where your files reside."
 
She still looked puzzled.
 
"It's basically a folder. Do you know what a folder is?"
 
"Oh yes, I know what a folder is!"

I can't tell you how surreal this moment was for me. I was her age when Windows 95 came out. I recall creating folders in the GUI and opening DOS prompts to check that a directory had actually been created. I knew what directories were, but folders I was suspicious of. This went on for some time before I finally trusted that creating folders did indeed make directories. I take this knowledge for granted and then realized that many [CLI](https://en.wikipedia.org/wiki/Command-line_interface) commands won't make sense unless you know what a directory is.

Next step was to show her how to use VI to create and edit her first HelloWorld.sh. I was surprised and proud that she was able to maneuver around in VI fairly easily. Using [P4V](https://www.perforce.com/product/components/perforce-visual-client), she marked the shell script for add and submitted the file to one of our test depots. I showed her how to view revision history using [Revision Graph](Revision Graph), [Time-lapse View](https://www.perforce.com/support/tutorial-video-library/video/using-time-lapse-view) and [P4Merge](https://www.perforce.com/product/components/perforce-visual-merge-and-diff-tools). She was particularly interested in seeing diffs with P4Merge referring to it as "cool." Which I consider a big win coming from a teenager! Finally, I showed her how to execute the same steps using our p4 command line client.

Our hour was up and I was happy to cover what we did. I'm constantly amazed by the learning experiences I have by working at Perforce. I initially set out to teach our intern about Perforce. She ended up giving me insights about the software and technology experience for a teenager in 2012. And trust me, they're not checking what happens after a folder gets created.

*This is article was [originally published](https://www.perforce.com/blog/120821/directories-are-folders) on the Perforce Corporate Blog.*
