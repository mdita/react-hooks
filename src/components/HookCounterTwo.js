import React, { useState } from 'react';

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const incrementFice = () => {
        setCount(prevCount => prevCount + 5);
    }
    return (
        <div>
            <p>Counter: { count }</p>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={incrementFice}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo
