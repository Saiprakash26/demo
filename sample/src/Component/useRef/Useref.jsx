import React, { useState } from 'react'
import { useRef } from 'react'

export default function Useref() {

    const text = useRef(0) 
    const [name, setname] = useState('')
    function add() {
        text.current = name
    }

    return (
        <div>
            <h2>{name}</h2>
            <input type="text" onDoubleClick={(e)=>setname(e.target.value)} />
            <h3>{text.current}</h3>
            <button onClick={add}>send</button>
        </div>
    )
}
