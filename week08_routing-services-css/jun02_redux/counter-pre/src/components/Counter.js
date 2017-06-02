import React from 'react';

export default function Counter({ increment, decrement, count }) {
    return (
        <div>
            Current counter value: {count}
            <div><button onClick={(e) => increment()}>Increment</button></div>
            <div><button onClick={(e) => decrement()}>Decrement</button></div>
        </div>
    );
}