<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Async Patterns
===

## Questions? Issues

* ?

## Async Pop Quiz

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

* Publish on npm

1. Make a npm account (I like to use same username as github)
    * After you create run:
    ```
    > npm adduser
    ```
    and follow prompts
1. Make sure your package.json:
    1. Propername (kebob-case)
    2. A semver version
    3. `main` property to entry point (what should be the module used
    when somebody requires your package)
