import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import RestaurantNavbar from '../../Components/RestaurantNavbar';

function AuthGuard({
  isAuthenticated
}) {

  return isAuthenticated ? (
    <>
      <RestaurantNavbar isAuthenticated={isAuthenticated}/>
      <Outlet />
    </>
  ) : 
  <Navigate to="/login" replace />;
}

export default AuthGuard