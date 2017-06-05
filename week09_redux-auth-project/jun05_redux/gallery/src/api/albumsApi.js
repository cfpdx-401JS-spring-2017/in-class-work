import axios from 'axios';

const API_URL = '/api/albums';

export default {
  getAll() {
    return axios.get(API_URL)
      .then(r => r.data)
      .catch(err => {
        throw err.response.data;
      });
  },
  get(id) {
    return axios.get(`${API_URL}/${id}`);
  },
  add(album) {
    return axios.post(API_URL, album);
  }
};