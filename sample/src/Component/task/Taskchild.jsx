import React, { useContext } from 'react'
import one from './certi.jpg'
import './par.css'
import { user } from './Parenttask'

export default function Taskchild() {
  const name = useContext(user)
  const admission = useContext(user)

  return (
    <div>
        <img src={one} style={{width:'40%',height:'90vh',margin:'20px 490px 0px', position:'absolute'}} alt="images" />

        <h5 style={{top:'140px',marginLeft:'47%',position:'absolute',fontStyle:'italic',fontSize:'25px',textDecoration:'underline'}}>CERTIFICATE</h5>

       <div className='lab d-flex text-center' style={{marginLeft:'25%',position:'absolute',top:'210px',width:'40%',justifyContent:'space-evenly'}}>
       <label>Student Name : {name} </label>
       {/* <input type="text"  style={{border:'none',backgroundColor:'transparent'}}/> */}
       </div>
       <div className='lab1 d-flex text-center' style={{marginLeft:'25%',position:'absolute',top:'270px',width:'40%',justifyContent:'space-evenly'}}>
       <label>Admission No : {admission} </label>
       {/* <input type="text"  style={{border:'none',backgroundColor:'transparent'}}/> */}
       </div>
       <div className='lab2 d-flex text-center' style={{marginLeft:'25%',position:'absolute',top:'330px',width:'40%',justifyContent:'space-evenly'}}>
       <label>Date Of Birth :</label>
       {/* <input type="text"  style={{border:'none',backgroundColor:'transparent'}}/> */}
       </div>
       <div className='lab3 d-flex text-center' style={{marginLeft:'25%',position:'absolute',top:'390px',width:'40%',justifyContent:'space-evenly'}}>
       <label>Nationality :</label>
       {/* <input type="text"  style={{border:'none',backgroundColor:'transparent'}}/> */}
       </div>
       <div className='lab4 d-flex text-center' style={{marginLeft:'25%',position:'absolute',top:'450px',width:'40%',justifyContent:'space-evenly'}}>
       <label>Course Complete :</label>
       {/* <input type="text"  style={{border:'none',backgroundColor:'transparent'}}/> */}
       </div>
       <div className='lab5 d-flex text-center' style={{marginLeft:'25%',position:'absolute',top:'510px',width:'40%',justifyContent:'space-evenly'}}>
       <label>Second Language :</label>
       {/* <input type="text"  style={{border:'none',backgroundColor:'transparent'}}/> */}
       </div>
       <div className='lab6 d-flex text-center' style={{marginLeft:'25%',position:'absolute',top:'570px',width:'40%',justifyContent:'space-evenly'}}>
       <label>Document Required :</label>
       {/* <input type="text"  style={{border:'none',backgroundColor:'transparent'}}/> */}
       </div>
       {/* <div className='left w-50'style={{marginLeft:'39%',position:'absolute',top:'640px',width:'40%'}}>
        <label>Student Sign:</label><br />
        <label>Date:</label>
       </div> */}
    </div>
  )
}
