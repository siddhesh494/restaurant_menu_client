import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { verifyJWTToken } from "../APIService/auth"
import { setIsAuthenticate, setIsLoading, setRestaurantDetails } from "../store/userSlice"
import { PROTECTED_ROUTE } from "../utils/constant"


export const useJWTVerification = ( pathname) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    verifyUserJWTToken()
  }, [])

  const verifyUserJWTToken = async () => {
    dispatch(setIsLoading(true))
    try {
      const response = await verifyJWTToken()
      if(response) {
        dispatch(setIsAuthenticate(true))
        dispatch(setRestaurantDetails(response))
        // navigate('/dashboard/home')
        if(PROTECTED_ROUTE.indexOf(pathname) > -1) {
          navigate(pathname)
        } else {
          navigate('/dashboard/home')
        }
      }
    } catch (error) {
      
    } finally {
      dispatch(setIsLoading(false))
    }
  }
}