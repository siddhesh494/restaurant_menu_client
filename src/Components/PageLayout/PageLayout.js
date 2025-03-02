import React, { Suspense } from 'react'
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
import YourMenu from '../YourMenu'
import MenuDesign from '../MenuDesign'
import { verifyJWTToken } from '../../APIService/auth'

const restaurantLoader = async ({ params }) => {
  try {
    const response = await verifyJWTToken()
    return response;
  } catch (error) {
    console.log(error)
    return error
  }
};

function PageLayout() {
  const appRouter = createBrowserRouter([
    {
      path: '/', /* it will have unprotected  */
      loader: restaurantLoader,
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
      loader: restaurantLoader,
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
          element: <YourMenu />
        },
        {
          path: "menuDesign",
          element: <MenuDesign />
        }
      ]
    },
    {
      path: "/viewMenu/:restaurantID", //open route--- will show this page when they scan the QR
      element: <ViewMenu />
    }
  ])

  return (
    <Suspense fallback={<h1 className='text-3xl'>Loading...</h1>}>
      <RouterProvider router={appRouter} />
    </Suspense>
  )
}

export default PageLayout