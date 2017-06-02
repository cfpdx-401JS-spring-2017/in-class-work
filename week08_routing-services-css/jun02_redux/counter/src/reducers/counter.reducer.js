import { INCREMENT, DECREMENT } from '../constants/counter.const';

export default function CounterApp(state = 0, action) {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}