import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../../Utilities/Navbar'
import { LogOut } from "lucide-react"; // Icons for mobile menu

function RestaurantNavbar({isAuthenticated}) {
  return (
    <div>
      <Navbar
        isAuthenticated={isAuthenticated}
        leftLinks = {[
          {
            name: 'Dashboard',
            path: '/dashboard/home'
          },
          {
            name: 'Menu',
            path: '/dashboard/menu'
          }
        ]}
        rightComponents = {[
          {
            component: <Link to="/dashboard/profile" className="text-[#FF5722] font-semibold">Profile</Link>
          },
          {
            component: <LogOut color='#FF5722' className='cursor-pointer'/>
          }
        ]}
        rightMobileComponent = {[
          {
            component: <Link to="/dashboard/profile" className="text-[#FF5722] font-semibold">Profile</Link>
          },
          {
            component: <Link to="/" className="text-[#FF5722] font-semibold">Logout</Link>
          }
        ]}
      />
      <Outlet />
    </div>
  )
}

export default RestaurantNavbar