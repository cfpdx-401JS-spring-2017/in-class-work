import { INCREMENT, DECREMENT } from '../constants/counter.const';

export default function CounterApp(state = 0, action) {
    const amount = action.amount;
    switch(action.type) {
        case INCREMENT:
            return state = state + amount;
        case DECREMENT:
            return state = state - amount;
        default:
            return state;
    }
}