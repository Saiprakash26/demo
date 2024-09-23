import React, { useContext } from 'react'
import { a } from './MianContext'

export default function DispContext2() {
    const data = useContext(a);
    return (
    <div>
        <h1> Disp 2</h1>
        <ul>
        {
                data.map((item, index)=>{
                    return<li key={index}>{item}</li>
                })
            }
        </ul>
    </div>
  )
}
