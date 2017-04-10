<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Welcome to 401 - Intro to Node.js
===

## Welcome back to campus for 401!

* Be conscious of time and space
    * on-time
    * clean up after yourself
* Please re-acquaint yourself with [code of coduct](https://github.com/codefellows/code-of-conduct)
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

* slides: Professional Software Development

For week 1:

1. Modularity - SRP "One Concern"
1. [Naming](http://arlobelshee.com/good-naming-is-a-process-not-a-single-step/)
1. (Literal) Code Cleanliness (indentation, formating, no scrappy bits o' commented out stuff)

Keep asking questions about what this means!

## In-Class Work

All code and goodies from Instruction are available in the [**in-class-work** repo](https://github.com/cfpdx-401JS-spring-2017/in-class-work)

## Install Node and Submit an Assignment

* Make sure you have node.js > `6.x.x`
* [Node.JS Docs](https://nodejs.org/dist/latest-v7.x/docs/api/)

### How to submit an assignment

[Follow along as we submit our first assignment](https://github.com/cfpdx-401JS-spring-2017/submit-401-way)

### In-Class Greeting App

1. Add more feedback
    * `eslint` 
        * [config](http://eslint.org/docs/user-guide/configuring)
        * [recommended](http://eslint.org/docs/rules/) rules
    * `.gitignore`
1. Modularize
1. Test
1. Intergration Test
1. Submit
1. Reuse

## Distributed Systems

### Questions to Ponder...

* What is a(n)... 
  > ...app?
   
  > ...program?

  > ...process?
* What were you calling when you made an AJAX "call"?
* What is a server?

### Key Points

* A process is "unit of execution" controlled by the Operating System (OS)
    * CPU time
    * Memory space
* Communication between processes
    * `stdin`/`stdout`/`stderr`
    * `TCP` - Networking FTW!
* Distributed Systems
    * The total set of processes involved in the overall "system"
    * Client, Server [, Database]

### Exercise

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


