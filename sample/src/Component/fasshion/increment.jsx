import React, { useReducer } from 'react'
const countreducer = (state,action)=>{
    switch(action.type){
        case 'decrement':
            return {...state,
                count:state.count-action.payload
            }
            // break;
        case 'increment':
            return {...state,
                count:state.count+action.payload
            }
            // break ;
        default:
            return state
    }
}
export default function Usereducer() {
    // const [state, dispatch] = useReducer(reducer,initialstate)
    const initialstate = {
        count:0
    }
    const [state,dispatch] = useReducer(countreducer,initialstate)
    const decrement = (one)=>{
        dispatch({
            type:'decrement',
            payload:one
        })
    }

    const increment = (one)=>{
        dispatch({
            type:'increment',
            payload:one
        })
    }
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>increment(1)}>incre</button>
        <button onClick={()=>decrement(1)}>decre</button>
    </div>
  )
}

