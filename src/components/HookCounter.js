import React, { useState } from 'react';

function HookCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: { count }</p>
            <button onClick={() => setCount(count + 1)}>Increase</button> 
            <button onClick={() => setCount(count ? count - 1 : count)}>Decrease</button> 
        </div>
    );
}

export default HookCounter;