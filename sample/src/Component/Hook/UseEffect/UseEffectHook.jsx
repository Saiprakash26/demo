import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {
    const [count,setcount] = useState(0);

    const increment = ()=>{
        setcount(count+1)
    }

    const decrement = ()=>{
        setcount(count-1)
    }


// Useeffect will be used to view updated components //
useEffect(()=>{
    console.log(`updated${count}`);
    
},[count])

    // useEffect
    console.log("render");
    
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}
