import React, { useEffect, useState } from 'react'

const ExOne = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
        setCount(count => count + 1)
    },2000)
    //setCount(count => count + 1)
  },[count])
    
  return (
    <div>
        <h1>I've rendered {count} times!</h1>
    </div>
  )
}

export default ExOne