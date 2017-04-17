<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> HTTP and REST
===

## Questions and Issues?

* Review Simple Db
* ?

## Today's Learning Objectives

1. Create HTTP server using Node.js
2. Differentiate HTTP requests based on path (`url`) and verb (`http`) and other request factors (`query`, `content-type`)
3. E2E servers using Mocha (and chai-http for HTTP)

## New Tool

* [ChaiJS](http://chaijs.com/)
* [chai-http](http://chaijs.com/plugins/chai-http/)

### E2E Testing Servers

* Using "real" clients for end-to-end (E2E) Testing
* Focus on golden path, defer to unit tests for more refined functionality 
* use setup and teardown
* Node Clients
	* HTTP (node built-in module)
	* Request Libraries (request, superagent, etc)
	* Chai HTTP (SuperAgent)
* Postman

### HTTP

* [ Http Protocol explained ](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
* Url
	* [parts of url](http://bl.ocks.org/abernier/3070589)
	* protocol
	* hostname ( host + port )
	* resource path
	* query
* Verbs: 
	* GET, POST, PUT, DELETE, PATCH
	* plus more ...
* REST
	* [understanding REST](https://spring.io/understanding/REST)
	* Resources (nouns!)
	* Part “art”
* Headers
	* Status codes
	* Entity Description
		* Content type, etc.
	* Authorization tokens

### REST use cases:
* `GET /todos` = return the list of todos (Read)
* `GET /todos/:id` (example: `/todos/123`) = return specific todo,
often used for a detail view (Read)
* `POST /todos` = create a new todo (and return object with id) (Create)
* `PUT /todos/:id` = create or replace todo with this specific id (Update)
* `PATCH /todos/:id` = update the supplied properties on the todo with specific id (Partial Update)
* `DELETE /todos/:id` = delete the specified todo (Delete)

### Query Parameters

Represent refinements or modifications to how the request should be processed:
* `?limit=100&page=3` - return results 201-300 
* `?format=xml` - control results format (might see on third party API)
* `?access_token=123edfdo3o3o23` - provide a token for authentication
* `?query={ name: 'Smith' }` - provide query parameters that filter the results

Check out built-in module `const url = require('url');` Which includes query methods, but
you can also use built-in `const qs = require('querystring');` for helpful methods.

HTTP status codes:
* `200` OK
* `300` (about the resource, hasn't changed, redirect here)
* `400` user did something wrong
* `500` something went wrong on our server