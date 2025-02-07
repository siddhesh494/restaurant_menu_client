import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../APIService/auth";
import Button from "../../UtilitiesComponents/Button";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerLoader, setRegisterLoader] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    registerNewRestaurant({
      name,
      email,
      password
    })
  };

  const registerNewRestaurant = async (body) => {
    setRegisterLoader(true)
    try {
      await register(body)
      
      toast.success("Registration successful! Redirecting to login...")
      
      navigate("/login")
    } catch (error) {
      console.log("Error:", error)
      toast.error(`Error: ${error?.response?.data?.message || error.message}`)
    } finally {
      setRegisterLoader(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-[#FF5722] mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-medium">Restaurant Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#FF5722]"
              placeholder="Enter your restaurant name"
            />
          </div>

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

          {/* Confirm Password Input */}
          <div>
            <label className="block text-gray-700 font-medium">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#FF5722]"
              placeholder="Confirm your password"
            />
          </div>

          {/* Register Button */}
          <Button
            type="submit"
            isLoading={registerLoader}
            // size={'lg'}
          >
            Register
          </Button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#FF5722] font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
