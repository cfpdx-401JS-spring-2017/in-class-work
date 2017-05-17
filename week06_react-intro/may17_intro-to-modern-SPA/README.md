<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Intro to React
===

## Questions/Issues

* ?

## Background

* Cycle of Thin and Thick Clients
	* Mainframe days - "dumb terminal"
	* Rise of PC (Windows95) - "client-server", "thick-client" (windows apps)
	* Rise of Internet - "dumb browser", server rendered pages
	* Rise of Mobile and HTML5 - "web app", powerful client
	* Next?
		* Everything is a client/server, nodes on the Internet
			* Realtime, connected
		* What class of server do you need?
		* IoT - not just for humans :)

* Single Page Applications
	* View changes are programmatic, browser not refreshing
	* Talk to servers

* Frontend Libraries and Frameworks
	* What do they do?
		* Render and Manipulate the DOM
	* But what do they help me do?
		* Keep the DOM up to date
		* Respond to user interactions
	* Reactive programming
		* Offer developers API for declaring or describing:
			* how the data and html should be combined (interpolation)
			* data changes
		* Syncing data to UI happens "automagically"

* JavaScript (, HTML, CSS)
	* New language features
	* Optimizations and other production enhancements
	* Requires a build system
	* Requires a server to run development

* End result for "Modern Front End Development":
	1. Amount and complexity of programming logic for the app is great
		* Advanced JavaScript
		* Modularity and Organization
	1. Build system layer
	1. Application layer
		* React offers a whole new paradigm
	1. Let focus on build or app, but not both. 
	1. App more relvent to help you care about build system
	1. Enter `create-react-app`...

## Why React?
* JS FTW!
* Community
* Build System

## Today's Learning Objectives

* Use `create-react-app` to develop and run a React app
* Use JavaScript and `jsx` to render to DOM
* Use jsx as a javascript expression in conjunction with plain JavaScript
* Understand core React concepts: 
    * JSX "html in JavaScript"
    * `state` and `props`
    * Components
    * Render cycle

## Overview

### JSX
* Gets transpiled to JavaScript (that creates vdom)
* Try babeljs.io/repl to see what JSX gets turned into
* Offers declarative construct on top of React.createElement calls
* Enables full usage of Javascript
* Any normal JS expressions may be used
	* Variables, closures, etc.
	* Calling other functions
* Write valid jsx
	* tags (xml)
	* [To the Docs!](https://facebook.github.io/react/docs/introducing-jsx.html)
	* [To the Docs Again!](https://facebook.github.io/react/docs/jsx-in-depth.html)

### ReactDOM.render

* Render content to DOM
* (Re-Render content to DOM, but probably don't need to...)

### Key Concepts

* Manage `state` and `props`
* Data flows down, events flow up
* Components
    * "Dumb" components are pure functions that take `props`
    * `extends Component`
        * Need state
        * Need life cycle methods (not today)
    * `extends PureComponent`
        * (Probably not today)
* Understand React render cycle

### React rendering

* Render process
    * Virtual DOM
    * Tree Diff ([Reconciliation](https://facebook.github.io/react/docs/reconciliation.html))
    * Update DOM
* Rerender is same process
* Lists
    * Using `.map()` to handle lists of things
    * Using `key` to map between data and DOM
* What is effect on rendering do to data changes?
    * We will explore in depth...