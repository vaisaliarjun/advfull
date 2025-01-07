import React, { useState } from "react";

const Gallery = () => {
    const [counter, setCount] = useState(0);

    function increment() {
        setCount(counter + 1);
    }

    function decrement() {
        setCount(counter - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <section>
            <h1>This is my Gallery Page</h1>
            <h2 style={{ textAlign: "center" }}>Learning State Concept</h2>
            <h3>The state of the variable counter is {counter}</h3>
            <button onMouseOver={increment}>Increment</button>
            <button onDoubleClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </section>
    );
};

export default Gallery;