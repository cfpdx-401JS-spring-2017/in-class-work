import { INCREMENT, DECREMENT } from '../constants/counter.const';

export default function CounterApp(state = 0, { type, amount }) {
  switch(type) {
    case INCREMENT:
      return state + amount;
    case DECREMENT:
      return state - amount;
    default:
      return state;
  }
}