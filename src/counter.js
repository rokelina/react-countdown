import { useState, useEffect } from "react";
import './counter.css';

function Countdown(){
    const [counter, setCounter] = useState(10);

    const countdownHandle = () => {
        setCounter((counter) => counter > 0 ? counter - 1 : 0);
    };
    
    const resetHandle = () => {setCounter(10)};
    
    useEffect(() => {document.title = `${counter} clicks to go!`}, [counter]);
    
    return (
        <div className="counter-container">
            <div>
                <h2>{ counter }</h2>
                <p>{counter} clicks to go!</p>
            </div>
            <div>
                <button 
                className="countdown-button"
                onClick={countdownHandle}>Countdown</button>
            </div>
            <div>
                <button 
                className="reset-button"
                onClick={resetHandle}>Reset</button>
            </div>
        </div>
    )
};

export default Countdown;