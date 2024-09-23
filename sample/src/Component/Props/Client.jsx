import React from 'react';


const style={
    color:'red'
}



export default function Client(event) {
  return (
    <div className='bank'>
        <h1 style={style}>client page</h1>
        <h2 style={{color:'red'}}>{`Loan amount ${event.loanamount}`}</h2>
    </div>
  )
}
