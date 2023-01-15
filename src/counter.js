import { useState, useEffect } from "react";
<<<<<<< HEAD

=======
import './counter.css';
>>>>>>> c0f7333 (adds reset button, changes hook to useState)

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
<<<<<<< HEAD
                <h3>{ counter }</h3>
=======
                <h2>{ counter }</h2>
>>>>>>> c0f7333 (adds reset button, changes hook to useState)
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