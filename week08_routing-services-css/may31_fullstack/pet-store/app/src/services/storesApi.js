// "Service" module that wraps data calls to server

// general root url for stores api
const API_URL = '/api/stores';

export default {
  getAll() {
    return fetch(API_URL)
      .then(res => res.json());
  },
  get(id) {
    return fetch(`${API_URL}/${id}`)
      .then(res => res.json());
  },
  add(store) {
    return fetch(API_URL, {
      method: 'POST',
      // we must serialize data ourselves
      body: JSON.stringify(store),
      // we must use right content-type or
      // server will NOT parse to req.body
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    })
    // we need to get the res.json() regardless
    // of whether it was a success or failure statusCode.
    // We combine the status and the call to res.json()
    // so we have access to BOTH in next then
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      // bad status code, convert to reject (catch) via throw
      if(!ok) throw json;
      // okay? then just return the json
      return json;
    });

  },
  remove(id) {
      
  }
}