import React, { useState } from "react"

export default function Practice1() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */
    const [count,setCount] = useState(0);
    function handleIncrement(){
      setCount(prevCount=>prevCount + 1);
    }

    function handleDecrement(){
      setCount(prevCount=>prevCount - 1);
    }
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={handleDecrement} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onClick={handleIncrement} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
