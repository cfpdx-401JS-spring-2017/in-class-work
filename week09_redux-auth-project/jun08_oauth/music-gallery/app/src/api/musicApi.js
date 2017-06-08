import { request } from './request';

const URL = '/music';

export default {
  get() {
    return request.get(URL);
  }
};