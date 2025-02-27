import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../UtilitiesComponents/Navbar'
import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { removeCookie } from '../../utils/helper';
import { setIsAuthenticate, setRestaurantDetails } from '../../store/userSlice';

function RestaurantNavbar() {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const isAuthenticated = useSelector((item) => item.user.isAuthenticate)

  const logoutUser = () => {
    removeCookie("auth")
    // navigate(0)
    dispatch(setIsAuthenticate(false))
    dispatch(setRestaurantDetails({}))
  }

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
            name: 'Your Menu',
            path: '/dashboard/menu'
          },
          // {
          //   name: 'Design Menu',
          //   path: '/dashboard/menuDesign'
          // }
        ]}
        rightComponents = {[
          {
            component: <Link to="/dashboard/profile" key="/dashboard/profile" className="text-[#FF5722] font-semibold">Profile</Link>
          },
          {
            component: <LogOut key="logout" color='#FF5722' onClick={logoutUser} className='cursor-pointer'/>
          }
        ]}
        rightMobileComponent = {[
          {
            component: <Link to="/dashboard/profile" key="/dashboard/profile" className="text-[#FF5722] font-semibold">Profile</Link>
          },
          {
            component: <Link to="/" key="/" onClick={logoutUser} className="text-[#FF5722] font-semibold">Logout</Link>
          }
        ]}
      />
    </div>
  )
}

export default RestaurantNavbar