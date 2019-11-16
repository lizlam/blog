---
title: "Today I Learned How to Lint a Jenkinsfile"
date: "2017-09-06"
template: "post"
draft: false
slug: "/posts/til-lint-jenkinsfile"
category: "Jenkins"
description: "Today I learned how to lint a Jenkinsfile."
---

*Today I Learned* how to lint a Jenkinsfile.  Linting is the process of running some program that will verify your code for syntax errors.  I've been finding myself writing a lot of Jenkinsfiles lately and it's a bit of a pain to write directly into the Jenkins UI where the linting happens.  There doesn't seem to be any external plugins for IDE's and editors, so in the meantime I was able to use Jenkins CLI to accomplish this in two steps. 

**Step 1: Download the Jenkins CLI**        
Open a browser and navigate to:    
`http//JENKINS_URL/jnlpJars/jenkins-cli.jar`

**Step 2: Execute the Linter**  
`java -jar jenkins-cli.jar -s http://JENKINS_URL declarative-linter < /path/to/Jenkinsfile`

And that's it!  It's a simple but manual process.  This could probably be easily scripted in an external tool in Eclipse or some other IDE.  I tend to write my Jenkinsfiles in vi so it would be an interesting to see if I can simply record a macro to lint my current file. 
