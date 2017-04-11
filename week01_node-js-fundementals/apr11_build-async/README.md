<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Build Automation, Dependency Management, and Asynchronous Programming
===

## Review/Questions

* Labs
* time to timeOfDay
* ?

## Today's Learning Objectives

* Use npm and project organization to structure your projects
and automate build tasks

## Learning Objectives
* Install and track third party module dependencies 
_using `npm` and the project `package.json` file_.
* Copy and run other projects _using cloned git repos and `npm i`_
* Setup and run a build scripts for: 
    * linting code _using eslint_ 
    * running unit tests
        * once
        * when a `.js` file changes.
* Write and use asynchronous functions

## Agenda

### Importing and Exporting Modules

* Why Modules?
    * Readability
    * Organization
    * Seperation of Concerns
    * Namespace ("global" scope per file)
    * Reduce Merge Conflicts
* Passing things between modules?
    * 301 - Using Global namespace has Issues
    * Define mechanism for "exporting" and "importing"
    * (not every file has to have a wrapping IIFE)
* CommonJS (CJS)
    * `module.exports =`
    * `= require()`
        * relative path from current file
        * use standard NIX `./`, `../../`, etc.
    * module export is cached
    * resolving modules
        * `path` notation
        * static name
            * built-in node module
            * local `node_modules`
            * global `node_modules`

### ES6 Modules

We'll be using CJS for first couple of weeks

### `npm`
* Package Management
    * installing and updating locally available resources
* Tracking
    * dependencies
        * Needed at production runtime
        * `--save` or `-S`
    * dev-dependencies
        * Needed at development time and not during production runtime
        * `--save-dev` or `-D`
* Publishing

## Build System
* Why?
    * Developer Sanity
    * Consistency of Process
* npm scripts
    * `npm run <script>`
    * `npm test` and `npm start`
    * `pre` and `post`
    * `--`
* Project Organization
    * `./lib` folder

## Async

### "By Ref"

* Variable table
* Values are always copied to new variables
* Parameter arguments act like variables in this regard
* Primitive values are stored in the table (pretend on strings)
* Objects are stored on the heap, the reference (address) is what is in the variable table

### Functions

* In JavaScript, function are (literally) objects and can be passed around and shared.
* A function as an object can be thought of as a function definition, waiting to be called (invoked)
* Closure variables are stored as part of the definition (see Chrome)
* Adding parenthesis: `myFunction()`
    * "calls" or "invokes" or "executes" the function with the supplied arguments.
    * The place (in the code) where a function is called is called the "call site"
    * Code inside the function is only run when the function is called.
* Functions are sometimes called methods, particularly when called as a property of an object:
   ```js
   someObj.greet();
   ```

### Node.JS Architecture

* V8 and C++
* Event Loop
    * Single threaded!
    * I/O
    * `setTimeout`

## Workflows

* Sequential
* Parallel

