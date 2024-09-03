import React, { useContext, useState } from 'react'
import { AppContext } from '../useContext'
import { UserContext } from '../context/UserContext'

const Child = () => {

    const userData = useContext(AppContext)

  return (
    <div>
        <h1>My name is {userData.name} my age {userData.age} and fav num </h1>
    </div>
  )
}

export default Child