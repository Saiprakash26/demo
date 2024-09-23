import React from 'react'
import './Sai.css';


export default function Sai() {
    return (
        <div className='div'>
            <h1 className='header'>LOGIN</h1>
            {/* <label className='label' htmlFor="userName">userName</label><br /> */}
            <input className='input' placeholder='enter ur user name' type="text" /><br />
            {/* <label className='label1' htmlFor="pass">Password</label><br /> */}
            <input className='input1' placeholder='enter your password' type="password" /><br />
            <button className='button'>submit</button>
        </div>
    )
}
