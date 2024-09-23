import React, { useState } from 'react'

export default function UseststeHook() {
    // const [state,setstate] = useState() ;
    const [increment, setincre] = useState(0);
    const [decrement, setdecre] = useState(0);

    const incrementhandle = ()=>{
             setincre(increment+1)
    }

    const decrementhandle = ()=>{
        setdecre(decrement-1)
}
  return (
    <div>
        <h3>{increment}</h3>
        <button onClick={incrementhandle}>+</button>
        <h3>{decrement}</h3>
        <button onClick={decrementhandle}>-</button>

    </div>
  )
}
