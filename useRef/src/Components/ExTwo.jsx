import React from 'react'
import { useRef } from 'react'

const ExTwo = () => {

  const inputElem = useRef()

  const btn = () => {
    console.log(inputElem.current)
    inputElem.current.style.background = "red"
  }

  return (
    <div>
      <input type="text" ref={inputElem}/>
      <button onClick={btn}>click here</button>
    </div>
  )
}

export default ExTwo