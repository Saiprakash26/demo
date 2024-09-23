import React, { useContext } from 'react'
import { user } from './Font'

export default function Fontfit() {
    const amt = useContext(user);


    let sty = amt.map((item) => {
        return (item.valso)
    })

    let stylew = amt.map((item) => {
        return item.property
    })

    let style = {
        
    }

    return (
        <div>
            <h2>web development</h2>
        </div>
    )
}
