import React, { useEffect } from 'react'
import { Navigate, Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import RestaurantNavbar from '../../Components/RestaurantNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthenticate, setRestaurantDetails } from '../../store/userSlice';
import { PROTECTED_ROUTE, UN_PROTECTED_ROUTE } from '../../utils/constant';

function AuthGuard() {
  const isAuthenticated = useSelector((item) => item.user.isAuthenticate)
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
    
  }, [restaurant, dispatch, navigate])

  return isAuthenticated ? (
    <>
      <RestaurantNavbar />
      <Outlet />
    </>
  ) : <Navigate to="/home" replace />;
}

export default AuthGuard