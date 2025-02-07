import React from 'react'
import { Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <p>
        Navbar 
      </p>

      <Outlet />
    </div>
  )
}

export default Navbar