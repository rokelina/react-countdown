import { useReducer, useEffect } from "react";


function Countdown(){
    const [counter, setCounter] = useReducer((counter) => (counter===0 ? counter : counter-1), 10)

    useEffect(() => {document.title = `${counter} times to go!`}, [counter]);

    return (
        <div className="counter-container">
            <div>
                <h3>{ counter }</h3>
                <p>{counter} times to go!</p>
            </div>
            <div>
                <button onClick={setCounter}>Countdown</button>
            </div>
        </div>
    )
};

export default Countdown;