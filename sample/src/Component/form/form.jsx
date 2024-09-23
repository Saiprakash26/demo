import React, { useState } from 'react'

export default function Form() {

    const [name,setname] = useState('')
    const [age, setage] = useState('')
    const [password, setpassword] = useState('')
    async function send() {
        const datas = {
            usernmae: name,
            age:age,
            password: password,
        }

        await fetch('https://6690c694c0a7969efd9d74b4.mockapi.io/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
            .then(() => {
                alert("Data Posted");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            })
    }
    // forms.addEventListener("send", postData);

    
  

return (
    <div>
        <h1>Login</h1>
        <div className='login1'>
            <input type="text" placeholder='username' onChange={(e) => {
                setname(e.target.value)
            }} /> <br />
            <input type="number" placeholder='age' onChange={(e) => {
                setage(e.target.value)
            }} /><br />
            <input type="password" placeholder='password' onChange={(e) => {
                setpassword(e.target.value)
            }} /><br />
            <button onClick={send}>send</button>
            
        </div>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{password}</h3>


    </div>
)
}
