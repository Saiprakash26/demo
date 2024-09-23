import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Post() {

    const [name, setname] = useState('')
    const [age, setage] = useState(0)

    const [view, setview] = useState([])


    const send = () => {
        console.log(name, age);
        axios.post('https://6690c694c0a7969efd9d74b4.mockapi.io/user', {
            Name: name,
            Age: age
        })
            .then(alert('success'))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        axios.get('https://6690c694c0a7969efd9d74b4.mockapi.io/user')
            .then((res) => setview(res.data))
            .catch((err) => console.log(err))
    })

    const maps = view.map((item,index) => {
        return (
            <ol key={item.id}>
                <li>{index+1}</li>
                <li>{item.Name}</li>
                <li>{item.Age}</li> 
                <li>
                    <Link className='btn btn-danger' to={`/update/${item.id}`}>Edit</Link>
                    <Link className='btn btn-success' onClick={() => {
                        axios.delete(`https://6690c694c0a7969efd9d74b4.mockapi.io/user/${item.id}`)
                            .then(alert('data deleted'))
                            .catch((err) => console.log(err))
                    }}>Delete</Link>
                </li>
            </ol>)
    })





    return (
        <div>
            <input type="text" placeholder='enter ur name' name='name' value={name} onChange={(e) => setname(e.target.value)} />
            <br />
            <br />
            <input type="number" placeholder='enter ur age' name='age' value={age} onChange={(e) => setage(e.target.value)} />
            <br />
            <br />
            <button onClick={send}>Submit</button>
            <div>
                {
                    maps
                }
            </div>
        </div>
    )
}
