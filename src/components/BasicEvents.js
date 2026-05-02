
import React from "react";

function BasicEvents() {
    const handleClick = () =>  {            

        alert("Button clicked!");
    }


    const handleMouseOver = () => {
        console.log("Mouse over the button!");
    }

    const handleMouseLeave = () => {
        console.log("Mouse left the button!");
    }

    const handleMouseEnter = () => {
        console.log("Mouse entered the button!");
    }

    const handleInputChange = (event) => {
        console.log("Input changed!"+event.target.value);
    }
    return (
        <div>
            <h2>Basic Events in React</h2>
            <input type="text" placeholder="Type something..." onChange={handleInputChange} />
            <br/>
            <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver}>
                Click Me
            </button>
        </div>
    );
}

export default BasicEvents