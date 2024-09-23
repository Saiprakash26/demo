import React, { createContext, useState } from 'react'
import Taskchild from './Taskchild';

export const user = createContext();

export default function Parenttask() {

    const [name,setname]=useState()
    const [admission,setadmission]=useState()
    const [dateofbirth,setdateofbirth]=useState()
    const [nationality,setnationality]=useState()
    const [coursecomplete,setcoursecomplete]=useState()
    const [secondlanguage,setsecondlanguage]=useState()
    const [documentrequired,setdocumnetrequired]=useState()


  return (
    <div>
        <h1>Parent</h1>
        <input type="text" onChange={(e)=>setname(e.target.value)} />
        <input type="text" onChange={(f)=>setadmission(f.target.value)} />
        <input type="text" onChange={(e)=>setdateofbirth(e.target.value)} />
        <input type="text" onChange={(e)=>setnationality(e.target.value)} />
        <input type="text" onChange={(e)=>setcoursecomplete(e.target.value)} />
        <input type="text" onChange={(e)=>setsecondlanguage(e.target.value)} />
        <input type="text" onChange={(e)=>setdocumnetrequired(e.target.value)} /> 
        <user.Provider value={name}>
            <Taskchild></Taskchild>
        </user.Provider>

    </div>
  )
}


