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

  },
  remove(id) {
      
  }
}