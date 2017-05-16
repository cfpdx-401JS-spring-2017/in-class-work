<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Classes, `this`, Pure Components (Functions) and Components, props v state
===

## Questions and Issues?

* VSCode Linting?
* ?

## Today's Learning Objectives

* Object literal shorthand
* `class`
* `this`
* React
    * Using "Components"
    * "Pure Function" Components
    * `props` vs `state`
* Making AJAX calls
    * CRA "Proxy"

## Agenda

Try it out: https://babeljs.io/repl/

### Objects
* Literal
	* function shorthand
	> replace `method: function() {}` with `method() {}`

	* getters/setters
	> add `get` and/or `set` in front of method name, and it becomes a
	> property getter or setter:
	> `get name: function() {}`

	* property/variable shorthand
	> If you are assigning a variable to a property of an object literal,
	> and the property should have the same name as the variable, you can omit
	> the `: value` part:
	
	> ```
	> const first = 'jane';
	> const last = 'smith';
	> const person = { first, last }; 
	> // instead of { first: first, last: last }
	> ```

* Destructure
	* Assignment to variable or argument
	* Property: `const { first, last } = person;`
	* Array Index: `const [x, y, z] = [1, 2, 3];
	* Always requires parens `()` in arrow function `=>`

* Defaults
	* `= value`

### `class`

* Prototypical Inheritence
* Props ontop of Props
* Same paradigm as scope
* Favor composition over inheritence
* Useful as container for combined behavior and state (date)
	* Compare Class vs Higher-Order Function
* Useful in API's as construct to build on (React `Component`)

### `this`
* Implicit based on call-site
* Functions
	* Explicit via `bind` and `call` and `apply`
	* Contextless `=>` functions


### React rules of state

1. Push state to lowest possible component
2. Shared state between sibling components, must belong
to a common ancestor.