import axios from 'axios';
import { API_URL } from './api';

export default {
  get(id) {
    return axios.get(`${API_URL}/${id}`)
      .then(r => r.data)
      .catch(err => {
        throw err.response.data;
      });
  },
  addImage(albumId, image) {
    return axios.post(`${API_URL}/${albumId}/images`, image)
      .then(r => r.data)
      .catch(err => {
        throw err.response.data;
      });
  },
  removeImage(albumId, id) {
    return axios.delete(`${API_URL}/${albumId}/images/${id}`)
      .then(r => r.data)
      .catch(err => {
        throw err.response.data;
      });
  }
};