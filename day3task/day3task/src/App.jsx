import React from "react";
import ClassComponent from "./components/ClassComponent/classcomp";
import Defaultinfo from "./components/FunctionComponent/Defaultinfo";
import Unorderedlist from "./components/FunctionComponent/Unorderedlist";
import "./App.css";

function App() {
    return (
        <div className="App">
            <ClassComponent />
            <Defaultinfo />
            <Unorderedlist />
        </div>
    );
}

export default App;
