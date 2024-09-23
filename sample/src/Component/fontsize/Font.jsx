import React, { createContext, useState } from 'react';
import Fontfit from './Fontfit';

export const user = createContext('');


export default function Font() {

    const [font, setfont] = useState('')
    const [view, setview] = useState([])


    function sendhandle() {
        const index = font.indexOf(':')
        const amt = font.slice(0, index)
        const val = font.slice(index,font.length-1)
        const data = {
            property : amt,
            valso :val
        }

       setview((e)=>[...e,data])
       console.log(view);
       
    }

    return (

        <div>
            <input type="text" value={font} onChange={(e) => { setfont(e.target.value) }} />
            <button onClick={sendhandle}>Change font size</button>

            <user.Provider value={view}>
                <Fontfit/>
            </user.Provider>
        </div>
    )
}
