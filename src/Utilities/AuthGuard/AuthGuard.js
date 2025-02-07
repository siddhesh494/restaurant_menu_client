import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import RestaurantNavbar from '../RestaurantNavbar';

function AuthGuard({
  isAuthenticated
}) {

  return isAuthenticated ? (
    <>
      <RestaurantNavbar />
      <Outlet />
    </>
  ) : 
  <Navigate to="/login" replace />;
}

export default AuthGuard