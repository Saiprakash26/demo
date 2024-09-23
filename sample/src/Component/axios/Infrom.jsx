import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Infrom() {

    const [rollno, setrollno] = useState(0)
    const [name, setname] = useState('')
    const [course, setcourse] = useState('')
    const [batch, setbatch] = useState('')

    const [view, setview] = useState([])

    const send = () => {
        console.log(rollno, name, course, batch);
        axios.post('https://6690c694c0a7969efd9d74b4.mockapi.io/user', {
            Rollno: rollno,
            Name: name,
            Course: course,
            Batch: batch
        })
            .then(alert('data sented Successfully'))
            .catch((err) => console.log(err)
            )

    }

    useEffect(() => {
        axios.get('https://6690c694c0a7969efd9d74b4.mockapi.io/user')
            .then((res) => setview(res.data))
            .catch((err) => console.log(err))
    })

    const maps = view.map((item, index) => {
        return(
        <ol key={item.id}>
            <li>{index + 1}</li>
            <li>{item.Rollno}</li>
            <li>{item.Name}</li>
            <li>{item.Course}</li>
            <li>{item.Batch}</li>
            <li>
                <Link className='btn btn-success' to={`/update/${item.rollno},${item.name},${item.course},${item.batch}`}>Edit</Link>
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
            <input type="text" placeholder='enter ur rollno' name='rollno' value={rollno} onChange={(e) => setrollno(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder='enter ur name' name='name' value={name} onChange={(e) => setname(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder='enter ur course' name='course' value={course} onChange={(e) => setcourse(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder='enter ur batch' name='batch' value={batch} onChange={(e) => setbatch(e.target.value)} />
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
