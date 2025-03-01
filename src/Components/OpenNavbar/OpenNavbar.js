import React, { useEffect } from 'react'
import { Link, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import Navbar from '../../UtilitiesComponents/Navbar'
import { useDispatch } from 'react-redux'
import { setIsAuthenticate, setRestaurantDetails } from '../../store/userSlice'
import { PROTECTED_ROUTE, UN_PROTECTED_ROUTE } from '../../utils/constant'

function OpenNavbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const restaurant = useLoaderData(); 

  useEffect(() => {
    if(restaurant?.response?.data?.success === false) {
      dispatch(setIsAuthenticate(false))
      dispatch(setRestaurantDetails({}))
      if(UN_PROTECTED_ROUTE.indexOf(window.location.pathname) > -1) {
        navigate(window.location.pathname)
      } else {
        navigate('/home')
      }
    } else {
      dispatch(setIsAuthenticate(true))
      dispatch(setRestaurantDetails(restaurant))
      if(PROTECTED_ROUTE.indexOf(window.location.pathname) > -1) {
        navigate(window.location.pathname)
      } else {
        navigate('/dashboard/home')
      }
    }
  }, [])

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
            component: <Link to="/login" key = "login" className="text-[#FF5722] font-semibold">Login</Link>
          },
          {
            component: <Link to="/register" key="register" className="text-[#FF5722] font-semibold">Register</Link>
          }
        ]}
      />
      <Outlet />
    </div>
  )
}

export default OpenNavbar