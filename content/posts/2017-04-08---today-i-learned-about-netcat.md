---
title: Today I Learned About Netcat
date: "2017-04-08"
template: "post"
draft: false
slug: "/posts/til-about-netcat"
category: "linux"
description: "Today I learned about netcat."
---

*Today I learned* about netcat, a utility written in 1995 for writing and reading data to TCP and UDP connections.
It's been called the "swiss army knife" of network utilities and from the little bit I've experiemented with,
I can see why!

Although named `netcat`, the actual command you run is `nc`.  Here are a couple of examples of using `nc`
that I found interesting.

**Scanning for a Port**

Let's say I'm running a webserver on localhost:4000 ([Jekyll](https://jekyllrb.com/)'s default).

I then run the following in a terminal:

`nc -v -z -w 1 localhost 3995-4000`

`netcat` will scan through localhost's port range 3995-4000, spitting out messages like this:

![Netcat Port Scan](/media/nc-port-scan.png)
At the very end, we can see that port 4000 was connected to successfully.

**Serving up a Webpage for One Connection**

Want to send a message through a webpage that can only be view once?  Ok, yeah I know. Who would want to do that?
(Just work with me here!) `netcat` can do that!

Create a file called `message.txt` with the following content:    

>  This message will self destruct as soon as you hit the refresh button.

Execute the following:    
`{ echo -ne "HTTP/1.0 200 OK\r\nContent-Length: $(wc -c <message.txt)\r\n\r\n"; cat message.txt; } | nc -l 8080`

Now, if I open up a browser and point to 'http://localhost:8080', I will see my message.  If I refresh the page,
the page goes away.  `netcat` serves the file and exits as soon as the first client hits it.  Pretty cool, huh?

**Creating a Backdoor**

Using `netcat` with the `-e` flag,  you can create backdoors to your systems (`-e` forks the process and redirects input/output).  It is possible to make any process a network server, listen on a port, and pipe the input to that process.  This is similar to SSH reverse tunneling.

Let's say you have 2 computers on the same network.    
On the 1st computer, run:   
     
`nc -l -p 1777 -e /bin/sh`

On the 2nd computer, run:    
    
`nc <IP_ADDRESS_OF_1ST_COMPUTER> 1777`

Now, type any shell command like `ls` or `touch i_see_you.txt` and see the commands get executed on the first computer.  Way cool!   

I didn't know anything about `netcat` before today, but the tiny bit I've discovered tells me it's going to be a valuable tool to have in my toolbox.






  
