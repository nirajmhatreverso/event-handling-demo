import React from "react";

function CounterButton({ onClickButton, children, color = "blue" }) {
    const [count, setCount] = React.useState(0);

    return (
        <button 
            onClick={() => {
                setCount(count + 1);
                onClickButton();
            }} 
            style={{ backgroundColor: color, margin: "1rem", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", padding: "10px 20px",     fontWeight: "bold"}}

        >
            {children} 
        </button>
    );
}

export default CounterButton;