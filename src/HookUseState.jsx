import React, {useState} from "react";

export function HookUseState () {
    
    const [value, setValue] = useState(1)
    
    const addValue = () => {
       setValue(value + 1);
    }
    return (
    <div className="hookusestate">
        <div>Value: {value}</div>
        <button onClick={addValue}>Add value</button> 
    </div>)
 }
