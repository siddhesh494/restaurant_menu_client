import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Login from '../Login'
import Home from '../Home'
import Register from '../Register'
import About from '../About/About'
import Contact from '../Contact'
import Browse from '../Browse'
import Profile from '../Profile'
import ViewMenu from '../ViewMenu'
import OpenNavbar from '../OpenNavbar'
import ForgotPassword from '../ForgotPassword'
import AuthGuard from '../../UtilitiesComponents/AuthGuard'

function PageLayout() {

  const appRouter = createBrowserRouter([
    {
      path: '/', /* it will have unprotected  */
      element: (
        <OpenNavbar />
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
          path: 'forgotPassword',
          element: <ForgotPassword />
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
      path: '/dashboard', /* it will have unprotected  */
      element: (
        <AuthGuard />
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
          element: <Profile />
        }, 
        {
          path: "menu",
          element: <Profile />
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