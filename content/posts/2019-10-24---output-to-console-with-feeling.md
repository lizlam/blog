---
title: Output to the Console, with Feeling
date: "2019-10-24"
template: "post"
draft: false
slug: "/posts/output-console-feeling"
category: "webdev"
tags:
  - browser
  - console
description: "Did you know there are other levels of messaging that can be sent to the browser's console?"
---

Most of us are familiar with using `console.log` to debug our JavaScript code.  For those who are not familiar, `console.log()` simply logs messages to the console.  

![Console Log](/media/console_log.png)

Did you know there are other levels of messaging that can be sent to the browser's console? These levels let us convey the sentiment of a message in addition to the content of the text.  They are kind of like the emojis of the console.

Possibly more appropriate than `console.log()`, use `console.debug()` for debugging messages (or notes to yourself).

![Debug Log](/media/console_debug.png)

If you want to gently warn someone with a yellow alert message, use `console.warn()`.

![Warn Log](/media/console_warn.png)

For more severe "code red" situations, use `console.error()`.

![Error Log](/media/console_error.png)

If you just want to stoicly pass on some information, use `console.info()`. 

![Info Log](/media/console_info.png)

With these different options, it is easy to convey the types of messages sent to the console as well as filter on them.  

*NOTE: I'm using FireFox with the dark theme on the web console.*
