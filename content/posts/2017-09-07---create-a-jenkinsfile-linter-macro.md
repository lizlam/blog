---
title: "Create a Macro to Lint a Jenkinsfile"
date: "2017-09-07"
template: "post"
draft: false
slug: "/posts/lint-jenkinsfile-vi-macro"
category: "Jenkins"
tags:
 - vi
description: "Learn how to lint a Jenkinsfile in vi."
---

*[Yesterday](/posts/til-lint-jenkinsfile) I Learned* how to lint a Jenkinsfile.  In the process of writing up that blog, I was curious about how it would work as a vi macro.  

For a quick refresher, here is how you record a macro:

`qa` - start recording a macro    
`q` - stop recording    
`@a` - play back the macro you just recorded.    

Also in vi, you can run shell commands using `!` while in escape mode.  Perfect!  

Putting it all together:

**Step 1:  Open Your Jenkinsfile in vi**    
`vi Jenkinsfile`    

**Step 2:  Start Recording a Macro:**    
:`qa`    

**Step 3:  Enter the Steps to Run the Jenkinsfile Linter**    
:`! java -jar /path/to/jenkins-cli.jar -s http://JENKINS_URL declarative-linter < %`    

**Step 4:  Stop Recording**    
:`q`    


Now whenever I'm working on a Jenkinsfile, I can hit `@a` to lint my current file.  So cool!

*Note: When you replay the macro, it may go too fast for you to see the results of the linting.  Since it was executed in the current shell, you will see the results to STDOUT when you exit vi.*
