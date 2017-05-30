<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Review / Master-Detail
===

## Questions/Issues

* Career Development!
* ?

## Agenda

* React Router
    * `Router`
        * Wrapper for entire app under control of the "Router"
        * Usually `BrowserRouter`
            * Server needs to handle various paths as `index.html`
        * `HashRouter` for "static"
    * `Link`
        * Used to cause the route to change
        * Use the `to` attribute
        * Use `match` param to link dynamically
    * `Route`
        * Dynamic rendering based on the "path" of the current url
        * Injects `match` prop automagically!
        * `path` matched "starts with"
            * doesn't include query part
            * use `exact` to match exact
        * Use `match` param to link dynamically
    * `Switch`
        * Groups a set of Routes allowing only to match
        * Otherwise each Route evaluates independently
        * Don't need if alternatives are mutually exclusive
        * Can provide "default `Route` with no path
    * `Router` rendering
        1. `component` - specify a valid `function` or `class` name
        1. `render` - supply a function
    * Params
        * "Capture" parts of the url as params
        * Familiar `:id` syntax
        * Accessible via `match.params.nameOfParam`
        * Always a `string`
    * Subroutes
        * Use `match.url`
        * recurse ftw!
    * `Redirect`
        * return from a render method to "redirect"
        * or redefine an existing route
    * `Prompt`
        * Conditionally prevents navigation away from a route
    * Wrapping `Route` in component
        * `Route` can be nested, don't have to be together
    * Multiple `Route` components can exist across app the update different
    parts of the app


    
