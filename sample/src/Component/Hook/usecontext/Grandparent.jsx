import React, { createContext } from 'react'
import Parent from './Parent';
import Child from './Child';

export const  user = createContext()

export default function Grandparent() {
    const amount = 2300;
  return (
    <div>
        <h5>Grandparent</h5>
        {/* <Parent money={amount} /> */}
        <user.Provider value={amount}>
            <Parent></Parent>
            <Child/>
        </user.Provider>
    </div>
  )
}
