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
	 