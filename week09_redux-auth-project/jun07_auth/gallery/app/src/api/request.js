import store from '../store';
import superagent from 'superagent';

let token = '';

const storage = sessionStorage;

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
      throw response.body.error;
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
