---
title: Run Perforce and Your Website on a Raspberry Pi
date: "2013-02-18"
template: "post"
draft: false
slug: "/posts/run-p4d-and-website-on-rpi"
category: "Raspberry Pi"
description: "Are you looking for a cheap way to run your personal Perforce server?"
---

Are you looking for a cheap way to run your personal Perforce server? Need a quick and dirty way to serve your website from it? This could be your next easy Raspberry Pi 2 project.


1.) On your Raspberry Pi, run:    

`wget ftp://ftp.perforce.com/perforce/r15.2/bin.linux26armhf/p4d`    
`wget ftp://ftp.perforce.com/perforce/r15.2/bin.linux26armhf/p4`    

2.) Change permissions so that the files are executable:    

`chmod +x p4`    
`chmod +x p4d`    

3.) Move the files to the bin directory:

`sudo mv p4* /usr/local/bin`

4.) Start p4d:

`mkdir /home/pi/p4root`
`p4d -r /home/pi/p4root -p raspberrypi:1666 -d`

5.) Create a Perforce workspace:    

`mkdir /home/pi/p4client`    
`cd /home/pi/p4clienti p4 -p raspberrypi:1666 client`   

Note: vim will start, perform a :wq [enter]

6.) Create a test index.html file:

`echo "<html> Hello World! </html>" > index.html`   

7.) Submit it to your Perforce server:

`p4 -p raspberrypi:1666 add index.html`
`p4 -p raspberrypi:1666 submit -d "Adding index.html to my raspberry pi p4 server"`

8.) Start the builtin python HTTP server that comes with the Raspian image:

`python -m SimpleHTTPServer`

9.) Open a browser and point to http://127.0.0.1:8000

Now you have a Perforce server and your versioned website running on your Raspberry Pi.

*This is a slightly updated article that was [original published](https://github.com/lizlam/p4blog/blob/master/p4blog-run-p4d-and-website-on-raspberry-pi-02-28-2014.png) on the Perforce Corporate Blog.*


