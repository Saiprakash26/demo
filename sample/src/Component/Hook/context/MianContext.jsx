import React, { createContext, useState } from 'react';
import DispContext from './DispContext';
import DispContext2 from './DispContext2';

export const a = createContext()

export default function MianContext() {

    const [text,settext] = useState("");
    const [data,setData] = useState([]);

    function handleClick(){
        setData((prev)=>[
            ...prev,
            text
        ])
    }

  return (
    <div>
        <h1>useContext Demo</h1>

        <input type="text" name="" value={text} onChange={(e)=>{settext(e.target.value)}} id="" />
        <button onClick={handleClick}>Submit</button>

        <a.Provider value={data}>
            <ProviderComponent />
        </a.Provider> 
    </div>
  )
}

function ProviderComponent(){
    return(
        <div>
            <DispContext />
            <DispContext2 />
        </div>
    )
}