import React, { useContext } from 'react'
import Child from './Child'
import { user } from './Grandparent'

export default function Parent() {
    const money = useContext(user)
  return (
    <div>
        <h5>Parent</h5>
        <h2>{money}</h2>
        {/* <Child money={money} /> */}
    </div>
  )
}
