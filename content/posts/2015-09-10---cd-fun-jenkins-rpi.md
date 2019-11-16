---
title: Continuous Delivery Fun with Jenkins and a Raspberry Pi
date: "2015-09-10"
template: "post"
draft: false
slug: "/posts/cd-fun-jenkins-rpi"
category: "Raspberry Pi"
description: "A fun project using Jenkins, LED lights and a Raspberry Pi."
---
![Raspberry Pi LED project](/media/rpi_led.jpg)

It's no secret that [Jenkins](https://jenkins-ci.org/) is a great [CI](https://www.thoughtworks.com/continuous-integration) tool for driving build and test automation. The [Raspberry Pi](https://www.raspberrypi.org/) is a credit card-sized device used for learning about software and hardware, and is incredibly popular as a platform for a variety of DIY projects. Being a fan of both, the proverbial lightbulb turned on (no pun intended) as I thought of a project that would combine the two.

Jenkins has a great dashboard that monitors the status of jobs; I thought it would be fun to introduce a physical computing element by using the Raspberry Pi's GPIO pins and LED lights to monitor the results of Jenkins jobs.

My setup is a [Raspberry Pi 2 Model B](http://www.raspberrypi.org/products/raspberry-pi-2-model-b/) running the Raspbian OS. The first thing I needed to do was figure out how to connect the LED lights that represent the different Jenkins states to the GPIO pins. I'm fairly new to the physical computing space and there are a lot of tutorials out there on how to connect LED lights to a RPi; I went with the non-breadboard, non-soldering route. Using only jumper wires and resistors, I connected up the LEDs then housed all of it in a plastic container that was originally packaging for a baby pacifier (yes, you read that right!).

For this project, you’ll need:

* 1 yellow LED light to represent UNSTABLE status
* 1 blue LED light to represent SUCCESS status
* 1 red LED light to represent FAILURE status
* 9 female-to-female jumper wires
* 3 270-Ohm resistors

Once you have all the materials, connecting an LED light to a Raspberry Pi is pretty straightforward:

* With a jumper wire, connect one leg of the LED to a [GPIO](https://www.raspberrypi.org/documentation/usage/gpio/) pin
* Connect the other leg to a ground pin using a resistor    
 (LED leg -> jumper wire -> resistor -> jumper wire -> ground pin)
* Repeat this for each LED and keep a note of the GPIO pin numbers 

The beauty of DIY projects is that you can be as creative or conventional as you'd like. Feel free to use a green LED light to designate a success state (or any color, for that matter) -- I decided to stay consistent with the [default blue ball status](https://jenkins.io/blog/2012/03/13/why-does-jenkins-have-blue-balls/).

The software bridge will consist of the GPIO module for the Raspberrry Pi and the Jenkins Python API. Using both of these libraries I was able to write a script that checks the latest Jenkins job status and lights up the appropriate LED.

The [code](https://swarm.workshop.perforce.com/files/guest/liz_lam/jenkins-rpi-led-status) for this project is located in the Perforce Workshop.

Feel free to branch it and modify it for your own Continuous Delivery fun!

*This post was [originally published](https://www.perforce.com/blog/150910/continuous-delivery-fun-jenkins-raspberry-pi) on the Perforce Corporate Blog.*
