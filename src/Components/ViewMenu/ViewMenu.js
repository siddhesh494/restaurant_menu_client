import React from 'react'
import { useParams } from 'react-router-dom'

function ViewMenu() {

  const { userId } = useParams()

  return (
    <div>ViewMenu: {userId}</div>
  )
}

export default ViewMenu