import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import RestaurantNavbar from '../../Components/RestaurantNavbar';
import { useSelector } from 'react-redux';
import { useJWTVerification } from '../../Hooks/useJWTVerification';

function AuthGuard() {
  const isAuthenticated = useSelector((item) => item.user.isAuthenticate)
  useJWTVerification(window.location.pathname)
  // const isLoading = useSelector((item) => item.user.isLoading)
  // const currentPath = window.location.pathname

  // console.log("currentPath", currentPath)
  return isAuthenticated ? (
    <>
      <RestaurantNavbar />
      <Outlet />
    </>
  ) : <Navigate to="/home" replace />;
}

export default AuthGuard