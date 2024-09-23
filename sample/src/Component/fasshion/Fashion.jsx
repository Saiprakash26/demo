import React from 'react'
import './Fashion.css'
import one from "./1448078.jpg"
import two from "./pexels-spencer-selover-142259-428338.jpg"
import three from "./pexels-vika-glitter-392079-1094084.jpg"
import four from "./pexels-lum3n-44775-322207.jpg"
import { Link, Outlet } from 'react-router-dom'




export default function Fashion() {
    return (
        <div>
           
            <div className='f1 img-container text-center mt-3'>
                <div className='demo'>
                    <img className='mb-5' src={one} alt="" style={{ width: '60%', height: '400px' }} />
                    <div className='content '>
                        <Link to={'/login'}><h5>Mens</h5></Link>
                    </div>
                </div>
                <div className='demo1'>
                    <img className='mb-5' src={two} alt="" style={{ width: '60%', height: '400px' }} />
                    <div className='content1'>
                        <a href="Womens"><h5>Womens</h5></a>
                    </div>
                </div>
                <div className='demo2'>
                    <img className='mb-5' src={three} alt="" style={{ width: '60%', height: '400px' }} />
                    <div className='content2'>
                        <a href="Kids"><h5>Kids</h5></a>
                    </div>
                </div>
                <div className='demo3'>
                    <img className='mb-5' src={four} alt="" style={{ width: '60%', height: '400px' }} />
                    <div className='content3'>
                        <a href="Accessories"><h5>Accessories</h5></a>
                    </div>
                </div>
            </div>
            {/* <Outlet></Outlet> */}
        </div>

    )
}
