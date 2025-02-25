import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams();

  return (
    <div className='bg-gray-600 text-white p-4 text-2xl text-center'>
      <h3>User : {id} </h3>
    </div>
  )
}

export default User
