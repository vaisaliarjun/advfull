import { useState, useMemo } from "react";

const slowFunction = (number) => {
    console.log("Running slow function...");
    for (let i = 0; i < 1000000000; i++) {} // Simulating a heavy task
    return number * 2;
};

const UseMemo = () => {
    const [num, setNum] = useState(0);
    const [theme, updateTheme] = useState(true);

    // Memoize the computation of doubling the number
    const doublingANumber = useMemo(() => slowFunction(num), [num]);

    const darkLight = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
    };

    return (
        <section>
            <h1>UseMemo Example</h1>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(parseInt(e.target.value) || 0)}
            />
            <button onClick={() => updateTheme((prevTheme) => !prevTheme)}>
            ToggleTheme
            </button>
            <h2 style={darkLight}>Result: {doublingANumber}</h2>
        </section>
    );
};

export default UseMemo;