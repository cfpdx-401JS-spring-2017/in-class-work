<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Express and Mongoose Review - Error Handling, User Accounts
===

## Questions and Issues

* ?

## Learning Objectives

1. Authenticate request on selected routes and allow/reject as appropriate
1. Create and add users by unique username and password using auth routes, mongoose and bcrypt
1. Assign tokens with payloads and authenticate them on requests using JWT

## Agenda

* Compare:
    * Authentication - are you who you say you are?
		1. signup/in username and password match, or
		2. user presents a token given to them when #1 happened
    * Authorization - are you allowed to do operation?

* Create middleware to protect routes
	* Must be "authenticated", ie have a token
	* Check user roles to provide "authorization" checks
* Manage Users
	* Auth Routes:
		* Signup
		* Signin
		* Verify
	* User Model
		* Unique user name
		* Password handling...
			* bcrypt-js` - hash password
* Issue Tokens
	* Keep Users "signed in" - even across new browser
	* Stateless
	* Keep Info (like "roles" or "user name") in Payload
* Authorization
	* Check role

### User Account

* User Model
	* `bcrypt-js` - hash password
* Auth Routes:
	* Signup
	* Signin
	* Verify
* Issue Token
	* For Today: Faux Token
* Create middleware to protect

	 


