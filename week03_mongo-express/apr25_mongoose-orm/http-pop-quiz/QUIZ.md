# http pop quiz

Create an node vanilla http server that does the following:

* `GET` `/cat` returns a json response of `{ name: 'super cat', type: 'top secret' }`
* any other `GET` returns the contents of a file `cat.html` whose contents is `<h1>Super Cat FTW!</h1>`
* any other request, respond with a `404` with status message `why u no cat?` and a reponse of 
`<h2>please cat</h2>`
* Write one chai-http test for: `GET` `/cat`

Feel free to simplify to accomodate the small nature of this.