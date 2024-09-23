import React, { useContext } from 'react'
import { user } from './Grandparent'

export default function Child() {
    const money = useContext(user)
  return (
    <div>
        <h5>Child</h5>
        <h2>{money}</h2>

    </div>
  )
}
