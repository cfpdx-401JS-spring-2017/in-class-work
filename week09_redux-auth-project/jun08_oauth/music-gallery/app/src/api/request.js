import store from '../store/store';
import superagent from 'superagent';

let token = '';

const storage = localStorage;

store.subscribe(() => {
  const { token: newToken } = store.getState();
  if(newToken !== token) {
    token = newToken;
    token ? storage.token = token : storage.clear('token');
  }
});

export const getStoredToken = () => storage.token;

export const API_URL = '/api';

const wrap = cmd => cmd
  .set('Authorization', token)
  .then(
    r => r.body,
    ({ response }) => {
      // TODO: test for token error, dispatch AUTH_FAILED action
      throw response.body ? response.body.error : response.text;
    }
  );

export const request = {
  get(url) {
    return wrap(superagent.get(`${API_URL}${url}`));
  },
  post(url, data) {
    return wrap(superagent.post(`${API_URL}${url}`).send(data));
  },
  delete(url) {
    return wrap(superagent.delete(`${API_URL}${url}`));
  },
};
