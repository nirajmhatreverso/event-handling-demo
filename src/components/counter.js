import React,{useState} from "react";
import './counter.css';
import CounterButton from "./CounterButton";

function Counter() {
    const [count, setCount] = useState(0);

    //event handler for incrementing the counter
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }

    //event handler for decrementing the counter
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    //event handler for resetting the counter
    const handleReset = () => {
        setCount(0);
    }

    const handleChangeByValue = (value) => {
        setCount(prevCount => prevCount + value);
    }

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>

            <h2>Interactive counter</h2>

            <div style={{fontSize: '2rem', margin: '20px'}}>{count}</div>
            <CounterButton color="green" onClickButton={() => handleChangeByValue(1)}>Increment</CounterButton>
            <CounterButton color="orange" onClickButton={() => handleChangeByValue(-1)}>Decrement</CounterButton>
            <CounterButton color="red" onClickButton={handleReset}>Reset</CounterButton>
            <CounterButton color="purple" onClickButton={() => alert("Counter value: " + count)}>Show Count</CounterButton>
            <CounterButton color="teal" onClickButton={() => setCount(count * 2)}>Double Count</CounterButton>
            <CounterButton color="gray" onClickButton={() => setCount(100)}>Make Count to 100</CounterButton>    
        
        </div>
    )
}

export default Counter;

