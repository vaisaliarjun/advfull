import React from "react";

function DefaultInfo() {
    return (
        <div>
            <h2>Understanding Default Export in JavaScript</h2>
            <p>
                The <code>default</code> keyword in JavaScript allows you to export a single value or function
                from a module. It simplifies importing by not requiring curly braces.
            </p>

            <h3>What is `default`?</h3>
            <p>
                The <code>default</code> keyword in JavaScript is used to export a single primary value, function, 
                or component from a module. It helps in identifying the main functionality of a file or module.
            </p>

            <h3>Why is `default` used?</h3>
            <p>
                The `default` export is used when a file contains one primary export that represents its main 
                purpose. It simplifies the import syntax and makes the code easier to read and understand.
            </p>
        </div>
    );
}

export default DefaultInfo;
