import React, { useState } from 'react'

const ExOne = () => {
    const [cricketr,setCricketr] = useState('Virat')

    let change = () => {
      setCricketr('Rohit')
    }
  
    return (
      <>
        <h1>My cricket'r is {cricketr}!</h1>
        <br />
        <button onClick={change}>Rohit</button>
      </>
    )
}

export default ExOne