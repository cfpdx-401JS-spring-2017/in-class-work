import React from 'react';

// this is a stateless function, just renders the view, no state

export default function Counter({ count, increment, decrement }) {
  return (
    <div>
      Current counter value: {count}
      <div><button onClick={e => increment()}>Increment</button></div>
      <div><button onClick={e => decrement()}>Decrement</button></div>
    </div>
  );
}
