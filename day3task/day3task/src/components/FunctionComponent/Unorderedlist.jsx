import React from "react";

function UnorderedList() {
    const items = ["React", "JavaScript", "CSS", "HTML"];

    return (
        <div>
            <h2>Topics to Learn</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default UnorderedList;
