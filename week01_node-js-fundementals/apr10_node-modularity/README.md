<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Welcome to 401 - Intro to Node.js
===

## Welcome back to campus for 401!

* Be conscious of time and space
    * on-time
    * clean up after yourself
* Please reacquaint yourself with [code of coduct](https://github.com/codefellows/code-of-conduct)
    1. Be kind and respectful
    1. Not creating obtacles to people being able to do their best work
    1. Overcome the bad habits of socialization. On _you_ to prevent #2.
    1. Everyone has equity in opportunity to:
        * Speak, Ideate, and Lead

## Goals

* Goal for this class:
    * Know how to build Full Stack apps
    * Ready for hire at 1-2 years experience
    * You are seen as a professional!
* Intros
    * Instructor, TA, Students
        > Name?
        
        > How would you describe your current relationship with JavaScript?

## Professionalism

[ON Becoming a "professional" software development](https://speakerdeck.com/martypdx/professional-software-development)

Keep asking questions about what this means

## In-Class Work

All code and goodies from Instruction are available in the [**in-class-work** repo](https://github.com/cfpdx-401JS-spring-2017/in-class-work)

## Install Node and Submit an Assignment

* Make sure you have node.js > `6.x.x`

### How to submit an assignment

[Follow along as we submit our first assignment](https://github.com/cfpdx-401JS-spring-2017/submit-401-way)

### Distributed Systems

#### Questions to Ponder...

* What is a(n)... 
  > ...app?
   
  > ...program?

  > ...process?
* What were you calling when you made an AJAX "call"?
* What is a server?

#### More...

#### Exercise

NodeJS TCP Telephone Game

1. Figure out your IP address, and post with your name in Ryver:
    * OSX/Linux:
    ```
    > ifconfig | grep "inet " | grep -v 127.0.0.1
    ```
    * Windows:
    ```
    > ipconfig
    ```
1. We will come up with a sequential list of all names and IP addresses
1. Create a single-file node.js app that:
    1. Opens a TCP Socket on port 61000 and listens for data
    2. Creates a TCP client connection to the next IP address
    1. When data is received, it adds '|<your-name>` and forwards to next IP address

Resources:
    * [Node.JS docs](https://nodejs.org/dist/latest-v7.x/docs/api/)

