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
      body: JSON.stringify(store),
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });

  },
  remove(id) {
      
  }
}