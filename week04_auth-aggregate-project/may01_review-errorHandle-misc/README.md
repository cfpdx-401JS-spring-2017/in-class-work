<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Middleware and Model Relationships
===

## Questions and Issues?

* ?

## Today's Learning Objectives

* Create tested express middleware
* Modularize resource routes using `express.Router()`
* Create middleware chains using `app.use` and `app.METHOD`
* Create custom middleware using express middleware functions 
* Consume third-party middleware via npm modules like `morgan`
* Correctly handle middleware errors and 404 errors by setting up 
express error handling middleware functions 

* Create related data models based on 
data usage patterns using mongoose schema options.
* Control json using mongoose `select()`, `populate()`, and `lean()`
* Consolidate business logic in models using static and 
instance mongoose model methods

## Agenda

### Express Middleware

* Middleware
	* What is it?
		* Loaded term with long history
		* In Express, in the “middle” between request and response
	* Middleware “Functions”
	* Mounting middleware
	* Design best practices
		* Use toward top of file
		* Leaving the res object until the end
* Express middleware
	* Demo: 
		* Logger
		* Body Parser
* Middleware error handling

[Additional info here](https://github.com/martypdx/workshop-express-middleware)

## Models Part 2

* Data Relationships
	* one to one
	* one to many
		* Demo: pet type
	* many to many
* Related Models
	* ObjectId
	* Prefer children referencing parent ids
	* Sub Documents
		* logical Mongoose constructs
	* ObjectId ref’s
* Using mongoose `.select` and `.populate`
* Mongoose document objects
	* Wrapper arround data
	* performance considerations
	* use `.lean()`
* Augmenting Models with methods
	* static
	* instance


### Schemas
* Options
	* timestamp
	 


