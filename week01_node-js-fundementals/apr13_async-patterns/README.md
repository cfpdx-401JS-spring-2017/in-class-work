<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Async Patterns
===

## Questions? Issues

* ?

## ??

## Agenda

* Debugging
    * Launch Mocha Tests

* [Arrows functions](https://github.com/martypdx/workshop-promises-fat-arrows/blob/master/fat-arrows.md)

* [Three function passing patterns](https://github.com/martypdx/workshop-promises-fat-arrows/blob/master/async-js-patterns.md) 

* Removing Unnecessary Wrapping Functions 

```js
// this example:
someAsyncFunction(param, err => {
    if(err) cb(err);
    else cb();
})

// can be written as:
someAsyncFunction(param, cb);

```
