import React, { useState } from "react"
import './Counter.css'

export const Counter = () => {
    const [value, setValue] = useState(0);


    return (
        <div>
            Value: {value}
            <button className="inc-button" onClick={() => setValue((v: number) => v+1)}>inc</button>
        </div>
    );
}