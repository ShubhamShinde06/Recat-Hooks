import React, { useState } from 'react'

const ExThree = () => {

  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount((e) => e + 1)
    setCount((e) => e + 1)
    setCount((e) => e + 1)
    setCount((e) => e + 1)
  }

  return (
    <div>
        <h1>Count : {count}</h1>
        <br />
        <button onClick={increaseCount}>Increase by 4</button>
    </div>
  )

}

export default ExThree