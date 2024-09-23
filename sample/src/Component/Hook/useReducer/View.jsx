import React, { useReducer, useState } from 'react'
const reducer = (state, action) => {
    switch (action.type) {
        case 'Change':
            return {
                ...state,
                [action.field]: action.value
            }
        // break;

        default:
            return state
    }
}

export default function View() {

    const initialstate = {
        Name: '',
        Email: '',
        Password: ''
    }
    const [arr,setarr] = useState([])

    const [state, dispatch] = useReducer(reducer, initialstate)


    const Handlechange = (e) => {
        dispatch({
            type: 'Change',
            field: e.target.name,
            value: e.target.value
        })
    }
    const onclickevent = (e) => {
        e.preventDefault();
        setarr((E)=>[...E,state])
        alert("data added sucessfully")
    }


    var list = arr.map((item ,index) =>(<tr key={index}>
        <td>{item.Name}</td>
        <td>{item.Email}</td>
        <td>{item.Password}</td>
    </tr>))



    return (
        <div>
            <div>
                <label > Name</label>
                <input type="text" name='Name' value={state.Name} onChange={(e) => Handlechange(e)} />
            </div>
            <div>
                <label > Email</label>
                <input type="text" name="Email" value={state.Email} onChange={(e) => Handlechange(e)} />
            </div>
            <div>
                <label >Password</label>
                <input type="text" name='Password' value={state.Password} onChange={(e) => Handlechange(e)} />
            </div>
            <button onClick={onclickevent}>send</button>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
