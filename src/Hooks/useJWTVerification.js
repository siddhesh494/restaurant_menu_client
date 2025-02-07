import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { verifyJWTToken } from "../APIService/auth"
import { setIsAuthenticate, setIsLoading } from "../store/userSlice"


export const useJWTVerification = ( ) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    verifyUserJWTToken()
  }, [])

  const verifyUserJWTToken = async () => {
    dispatch(setIsLoading(true))
    try {
      const response = await verifyJWTToken()
      console.log(response)
      if(response) {
        dispatch(setIsAuthenticate(true))
        navigate('/dashboard/home')
      }
    } catch (error) {
      
    } finally {
      dispatch(setIsLoading(false))
    }
  }
}