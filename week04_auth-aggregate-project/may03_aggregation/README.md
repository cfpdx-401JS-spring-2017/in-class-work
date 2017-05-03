<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Destructuring and Mongo Aggregation
===

## Questions and Issues

* ?

## Learning Objectives

1. Use destructuring to write clean, more concise code
1. Create aggregation pipelines to understand data in mongodb

## Agenda

* Destructuring
	* "Pluck" properties from objects when assigning 
	variables or function arguments
		* Using destructuring in arrow functions necessitates parenthesis:
		```
		.then(({ body }) => {
		```
	* Use `{ property }` for object properties
	* Use `[ item ]` for array index "properties"
	* More than one:
		* `const { foo, bar } = someObject;`
		* `const [ store, pets ] = results;`
	* Skip array elements:
		* `const [, pets] = results;`
	* Defaults
		* `({ foo = 'FOO', bar }) => {}`
	* Aliasing
		* `.then(({ body: film }) => {})`
	* And more... ...but keep it simple to start

* Aggregation
	* [To the docs!](https://docs.mongodb.com/manual/aggregation/)
	* [Aggregation Pipeline](https://docs.mongodb.com/manual/core/aggregation-pipeline/)
		* Happens on the server
		* Exposed on each model as `.aggregate`, but is a pass-thru (no special mongoose logic)
		* Process
			1. Have data to analyze. [Get some data](https://docs.mongodb.com/getting-started/shell/import-data/)
			2. Work out commands in RoboMongo
			3. Copy to Route
		* [Operators](https://docs.mongodb.com/manual/reference/operator/aggregation/#aggregation-pipeline-operator-reference)
		* [Walk-thru for restaurants](https://docs.mongodb.com/getting-started/shell/aggregation/)
