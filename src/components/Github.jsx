import React, { useEffect } from "react"

function Github() {
  useEffect(() => {
    fetch("https://github.com/santykr7")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  }, [])
  return (
    <div className='text-center m-4 bg-gray-400'>
      <h1>Github followers:</h1>
    </div>
  )
}

export default Github

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/santykr7")
  return response.json()
}
