import React, { useState } from 'react';

export default function Counter() {
    //static displayName = Counter.name;

    //constructor (props) {
    //  super(props);
    //  this.state = { currentCount: 0 };
    //  this.incrementCounter = this.incrementCounter.bind(this);
    //}

    const [count, setCount] = useState(0)

    //incrementCounter() {
    //    this.setState({
    //        currentCount: this.state.currentCount + 1
    //    });
    //}

    return (
        <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{count}</strong></p>

            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
