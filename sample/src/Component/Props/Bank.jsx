import React from 'react'
import Client from './Client';

export default function Bank() {
    const loan = 10000;
  return (
    <div>
        <h1>Bank component page</h1>
        <Client loanamount = {loan}></Client>
    </div>
  )
}
