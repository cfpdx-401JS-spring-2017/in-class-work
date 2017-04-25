<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> HTTP and REST
===

## Questions and Issues?

* `.travis.yml` for installing mongodb:
    ```
    language: node_js
    node_js:
      - "6"
    
    services:
      - mongodb
    ```

* ?

## Today's Learning Objectives

* Code models that correspond to logic business entities 
(aka resources, aka domain logic) _using mongoose_. 
* Code an express Router that expose CRUD operations against 
the mongoose models as a set of callable REST API endpoints.
* Correctly order app routes and multi-function routes by 
knowing how middleware "flows"
* Use the next() function to 
	* Selectively apply common app logic like authentication and authorization
	* Introduce custom properties on the request object

## Agenda

### Schemas
* Why?
	* Demo: garbage in/garbage out
* Connecting with Mongoose
* Navigating the Mongoose Docs
* Schemas
	* Defining “Properties”
		* Types and property options
	* Schema Options
		* timestamp
		* required
		* validation...

### Models
* Models
	* schema => model
	* "service"
	* Consuming models in routes
		* Static model methods (`Model.findOne()`, etc.)
		* instance models (`model.save()`, etc.)
    * `select`, `count`, `lean`
* Testing models
	* `validate`
	 