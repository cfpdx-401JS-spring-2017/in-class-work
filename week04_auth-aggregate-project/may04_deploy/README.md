<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Express and Mongoose Review - Error Handling, User Accounts
===

## Questions and Issues

* ?

## Learning Objectives

1. Deploy to heroku
1. Setup mLab
1. Manage environment variables
	* `.env` file for storing environment variable
		* **MUST** add `.env` to `.gitignore
	* load via:
		* `env $(cat .env)` if everyone on NIX
		* use `npm i dotenv -S` and `require('dotenv').config()` for 
		cross-platform support

## Agenda

Repo is here: https://github.com/martypdx/petsRKewl

* Deploy to Heroku
	* Specifiy engine in `package.json`:
	```json
	{
	"name": "pets-r-kewl",
	"version": "1.0.0",
	"engines": {
		"node": "7.x"
	},
	"description": "",
	```

* Setup mLab
* Manage env  variables
* api guide at index.html

## Bonus