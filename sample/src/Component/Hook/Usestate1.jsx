import React, { useState } from 'react'
import isix from './download.jpeg'
import iseven from './pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg'


export default function Usestate1() {
    const [images, setimages] = useState(<img src={isix} alt="images" />)
    return (
        <div>
            <h2>
                {images}
            </h2>
            <button type='button' onClick={()=> setimages(<img src={iseven} alt="images" />)}>next images</button>
        </div>
    )
}
