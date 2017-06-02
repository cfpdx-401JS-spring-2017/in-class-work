import { INCREMENT, DECREMENT } from '../constants/counter.const';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}
