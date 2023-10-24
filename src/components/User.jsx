import React from "react"
import { useParams } from "react-router-dom"

function User() {
  const { userid } = useParams()
  return (
    <div className='bg-gray-700'>
      <h1 className='text-orange-700 text-3xl '>User:{userid}</h1>
    </div>
  )
}

export default User
