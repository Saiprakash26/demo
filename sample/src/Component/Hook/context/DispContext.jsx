import React, { useContext } from 'react'
import { a } from './MianContext'
export default function DispContext() {
    const data = useContext(a);
  return (
    <div>
        <h1>Disp 1</h1>
        <ol>
            {
                data.map((item, index)=>{
                    return<li key={index}>{item}</li>
                })
            }
        </ol>
    </div>
  )
}
