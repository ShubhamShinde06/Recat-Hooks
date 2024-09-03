import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UseContext'

const Login = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
  
    const {setUser} = useContext(UserContext)
  
    const handleSubmit =  (e) => {
        e.preventDefault()
        setUser({
            username, 
            password
        })
    }
  
    return (
      <>
        <h2>Login</h2>
        <input 
          type="text" 
          placeholder='username'
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input 
          type="text" 
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </>
    )
}

export default Login