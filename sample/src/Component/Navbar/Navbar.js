import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import img from './download.jpeg'

export default function Navbar() {
  return (
    <div className='navbar'>
      <h1 className='text-danger'>Navbar</h1>
      <div className="nav">
        <ol>
          <li><Link to={'/Sai'}>Login</Link> </li>
          <li><Link to={'/Sai'}>Home</Link></li>
          <li><Link to={'/Sai'}>About</Link></li>
          {/* <a href="">home</a> */}
        </ol>
      </div>
      <div className='img'>
        <img src={img} alt="images" />
      </div>

    </div>
  )
}

