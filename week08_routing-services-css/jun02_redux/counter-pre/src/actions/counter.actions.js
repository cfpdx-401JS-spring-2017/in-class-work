import { INCREMENT, DECREMENT } from '../constants/counter.const';

export function increment(amount = 1) {
    return {
        type: INCREMENT,
        amount
    }
}

export function decrement(amount = 1) {
    return {
        type: DECREMENT,
        amount
    }
}