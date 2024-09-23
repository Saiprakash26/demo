import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


export default function Update() {
    const [rollno, setrollno] = useState(0)
    const [name, setname] = useState('')
    const [course, setcourse] = useState('')
    const [batch, setbatch] = useState('')

    const navi = useNavigate()


    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://6690c694c0a7969efd9d74b4.mockapi.io/user/${id}`)
            .then((res) => {
                setrollno(res.data.rollno)
                setname(res.data.name)
                setcourse(res.data.course)
                setbatch(res.data.batch)
                
            })
            .catch((Err) => {
                console.log(Err)
            })

    }, [id])

    const updatehandle = () => {
        axios.put(`https://6690c694c0a7969efd9d74b4.mockapi.io/user/${id}`, {
            Rollno: rollno,
            Name: name,
            Course: course,
            Batch: batch
        })
            .then(navi('/create'))
            .catch((Err) => {
                console.log(Err)
            })

    }





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
            <button onClick={updatehandle}>Update</button>
        </div>
    )
}
