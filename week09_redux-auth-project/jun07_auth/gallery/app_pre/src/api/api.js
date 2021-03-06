import store from '../store';
import superagent from 'superagent';

let token = '';

store.subscribe(() => {
  const { token: newToken } = store.getState();
  if(newToken !== token) {
    token = newToken;
    token ? localStorage.token = token : localStorage.clear('token');
  }
});

// export const getToken = () => token;
export const API_URL = '/api';

const wrap = cmd => cmd
  .set('Authorization', token)
  .then(r => r.body)
  .catch(({ response }) => {
    throw response.body;
  });

export const request = {
  get(url) {
    return wrap(superagent.get(`${API_URL}${url}`));
  },
  post(url, data) {
    return wrap(superagent.post(`${API_URL}${url}`).send(data));
  }
};
