import React, { useMemo, useState } from 'react'

export default function UseMemoHook() {
    const [num,setNum] = useState(0);

    const loop = useMemo(()=>{
        let temp = 0;
        for(let i=0;i<num;i++){
            temp+=num*i;//6*0+6*1+6*2+6*3+6*4+6*5++++++++
        }
        return temp;
    },[num])
  return (
    <div>
        <h1>useMemo Example</h1>
        <input type="number" value={num} onChange={(e)=>{setNum(e.target.value)}} name="" id="" />

        <h2>
            Result : {num} <br />
            Memo : {loop}
        </h2>
    </div>
  )
}
