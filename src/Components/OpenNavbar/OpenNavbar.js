import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../../UtilitiesComponents/Navbar'
import { useJWTVerification } from '../../Hooks/useJWTVerification'

function OpenNavbar() {
  useJWTVerification()
  return (
    <div>
      <Navbar
        leftLinks = {[
          {
            name: 'Home',
            path: '/home'
          },
          {
            name: 'About Us',
            path: '/aboutUs'
          },
          {
            name: 'Contact Us',
            path: '/contact'
          }
        ]}
        rightComponents = {[
          {
            component: <Link to="/login" className="text-[#FF5722] font-semibold">Login</Link>
          },
          {
            component: <Link to="/register" className="text-[#FF5722] font-semibold">Register</Link>
          }
        ]}
      />
      <Outlet />
    </div>
  )
}

export default OpenNavbar