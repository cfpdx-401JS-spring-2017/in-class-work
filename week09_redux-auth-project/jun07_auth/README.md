<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Auth
===

## Questions/Issues

* ?

## Auth

Steps:
* Server
  * User model
  * Auth Routes
  * (protect with `ensureAuth` middleware) but lets start with getting token
* App
  * Store
    * Add user, userError state to the store
    * Reducers for auth workflows:
      * `user` - track the logged in user
      * `token` - track our token
      * `userError` - an errors in the auth process
    * Added `constants` (based on what we came up with in reducers)
    * Added tests for `reducers`
    * Added `actions`
      * async actions based on authenticating and getting user
      * `verify`, `signin`, `signup`, `signout`
    * Add some Routing logic and signin form
    * Add new reducers to root reducer
