import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../APIService/auth";
import { setCookies } from "../../utils/helper";
import Button from "../../UtilitiesComponents/Button";
import { useDispatch } from "react-redux";
import { setIsAuthenticate, setRestaurantDetails } from "../../store/userSlice";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState("siddhesh.ss26@gmail.com");
  const [password, setPassword] = useState("1234567");
  const [logginLoader, setLoginLoader] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    loginRestaurant({
      email: email,
      password: password
    })
  };

  const loginRestaurant = async (body) =>{
    setLoginLoader(true)
    try {
      if(email && password) {
        const response = await login(body)
        console.log("response", response)
        if(response.accessToken) {
          setCookies("auth", response.accessToken)
          dispatch(setIsAuthenticate(true))
          dispatch(setRestaurantDetails(response))
          navigate("/dashboard")
          toast.success("Login successful!")
        }
      }
    } catch (error) {
      console.log("error", error)
      toast.error(`Error: ${error?.response?.data?.message || error.message}`)
    } finally {
      setLoginLoader(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-[#FF5722] mb-6">
          Login to ScanToDine
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#FF5722]"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#FF5722]"
              placeholder="Enter your password"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link to="/forgotPassword" className="text-sm text-[#FF5722] hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            isLoading={logginLoader}
          >
            Login
          </Button>
          
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#FF5722] font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
