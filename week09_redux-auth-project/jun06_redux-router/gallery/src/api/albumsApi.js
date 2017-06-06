import axios from 'axios';
import { API_URL } from './api';

export default {
  get() {
    return axios.get(API_URL)
      .then(r => r.data)
      .catch(err => {
        throw err.response.data;
      });
  },
  add(album) {
    return axios.post(API_URL, album)
      .then(r => r.data)
      .catch(err => {
        throw err.response.data;
      });
  },
  remove(id) {
    return axios.delete(`${API_URL}/${id}`)
      .then(r => r.data)
      .catch(err => {
        throw err.response.data;
      });
  }
};