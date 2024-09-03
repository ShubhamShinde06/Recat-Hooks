import React, { useReducer } from 'react'
import { reducer } from './reducer';

const initialValue = 0;

const ExOne = () => {


    const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <div>
        <button onClick={() => dispatch({type:"INC"})}>+</button>
        <h1>{count}</h1>
        <button onClick={() => dispatch({type:"DEC"})}>-</button>
    </div>
  )
}

export default ExOne