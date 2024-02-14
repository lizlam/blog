---
title: How add grep as a custom tool in P4V 
date: "2024-02-13"
template: "post"
draft: false
slug: "/posts/p4v-grep-custom-tool"
category: "p4v"
description: "P4V Tips: How to add grep as a custom tool in P4V."
---

Creating Custom Tools in P4V is simple way to integrate the power of the CLI tools into 
a desktop GUI.  Here is an example on to run grep commands on your workspace files.

1. Click on Tools | Manage Tools | Custom Tools...
2. Click on the New button
3. Select Tool...
4. In the "Add Local Tool" window, fill in the following fields:
   * Name: grep
   * Application: /usr/bin/grep
   * Arguments: $D %F
   * Check "Run tool in terminal window"
   * Check "Prompt user for arguments"
   * Description: Match Pattern

Once your Custom Tool is created, simply select a file in the Workspace tab,
context click "grep", and enter the desired match pattern.  P4V will return a window
with the grep results.




