<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Redux
===

## Questions/Issues

* ?

## Redux

![flow](https://julienrenaux.fr/wp-content/uploads/2016/05/redux_diagram.png)

[`react-redux` - Redux for React](http://redux.js.org/docs/basics/UsageWithReact.html)

### Three Principals

1. Single source of truth
    > The state of your whole application is stored in an object tree within a single store.
1. State is read-only
    > The only way to change the state is to emit an action, an object describing what happened.
1. Changes are made with pure functions
    > To specify how the state tree is transformed by actions, you write pure reducers.

### Store

* Single store for the app
* Create using:
    ```js
    const store = createStore(reducer);
    ```
* But what is reducer???
    * Reducer takes `state` and `action`
    * Returns new state ("reduces" state based on action)
* Use `const CONST` because actions are used in both:
    * reducer (to know "what" action)
    * actions (returned as `type`)
* "connect" to component (via container)
    * `mapStateToProps` for each new state (from the store) what should the props be?
    * `dispatch` the things that sends ("dispatches") "action" requests
        * Usage: `dispatch(action())`
        * `mapDispatchToProps` what "actions" aka eventHandlers should be passed to the component (container)?
        * helper: `bindActionCreators`
        * if omitted, `dispatch` is passed directly as a prop

