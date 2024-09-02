import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const ExOne = () => {

  const  [value, steValue] = useState(0)
  
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1
  })
 

  return (
    <div>
        <button onClick={() => {steValue(e => e-1)}}>-1</button>
        <br />
        <br />
        <h1>{value}</h1>
        <br />
        <button onClick={() => {steValue(e => e+1)}}>+1</button>
        <br />
        <br />
        <h1>Render Count : {count.current}</h1>
    </div>
  )
}

export default ExOne