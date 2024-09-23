import React, { useState } from 'react'

export default function Login() {
    const [name, setname] = useState('');
    const [age, setage] = useState(0);
    const [gender, setgender]=useState('');
    const [coursecompletion,setcoursecompletion]=useState('');
    const [year,setyear]=useState('');
    const [arr, setarr] = useState([]);
    
    const handlesend = () => {
        const data = {
            Name: name,
            Age: age,
            Gender:gender,
            Coursecompletion:coursecompletion,
            Year:year
        }
        setarr((e) => [...e, data])
        console.log(arr);
    }


    return (
        <div>
            <div>
                <label>username</label>
                <input type="text" value={name} onChange={(e) => {
                    setname(e.target.value)
                }} />
                <label>age</label>
                <input type="number" value={age} onChange={(e) => {
                    setage(e.target.value)
                }} />
                   <input type="text" value={gender} onChange={(e) => {
                    setgender(e.target.value)
                }} />
                  <input type="text" value={coursecompletion} onChange={(e) => {
                    setcoursecompletion(e.target.value)
                }} />
                 <input type="number" value={year} onChange={(e) => {
                    setyear(e.target.value)
                }} />
                <button onClick={handlesend}>send</button>
            </div>
            <h3>{`${name}-${age}-${gender}-${coursecompletion}-${year}`}</h3>
            <ol>
                {
                    arr.map((item) => {
                        return (
                            <li>{`${item.Name}-${item.Age}-${item.Gender}-${item.Coursecompletion}-${item.Year}`}</li>
                        )
                    })
                }``
            </ol>
        </div>
    )
}
