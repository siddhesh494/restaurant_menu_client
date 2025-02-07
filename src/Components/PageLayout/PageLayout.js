import React, { useEffect, useState } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Login from '../Login'
import Home from '../Home'
import Register from '../Register'
import About from '../About/About'
import Contact from '../Contact'
import Navbar from '../../Utilities/Navbar'
import Browse from '../Browse'
import Profile from '../Profile'
import ViewMenu from '../ViewMenu'
import AuthGuard from '../../Utilities/AuthGuard'

function PageLayout() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const appRouter = createBrowserRouter([
    {
      path: '/', /* it will have unprotected  */
      element: (
        <Navbar />
      ),
      children: [
        { 
          index: true, 
          element: <Navigate to="home" replace /> 
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path:"home",
          element: <Home />
        },
        {
          path: "aboutUs",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ]
    },
    {
      path: '/restaurant', /* it will have unprotected  */
      element: (
        <AuthGuard 
          isAuthenticated = {isAuthenticated}
        />
      ),
      children: [
        { 
          index: true, 
          element: <Navigate to="home" replace /> 
        },
        {
          path:"home",
          element: <Browse />
        },
        {
          path: "profile",
          element: <Profile />,
        }
      ]
    },
    {
      path: "/viewMenu/:restaurantID", //open route--- will show this page when they scan the QR
      element: <ViewMenu />
    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default PageLayout