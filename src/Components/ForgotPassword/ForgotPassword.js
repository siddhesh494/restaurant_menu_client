import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../UtilitiesComponents/Button";
import toast from "react-hot-toast";
import { forgotPassword } from "../../APIService/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
  };

  const handleForgotPassword = async () => {
    setIsLoading(true)
    try {
      if(email) {
        const response = await forgotPassword({
          email: email
        })
        console.log("response", response)
        toast.success(`Success: ${response}`)
        setEmail("")
      }
    } catch (error) {
      console.log("error", error)
      toast.error(`Error: ${error?.response?.data?.message || error.message}`)
    } finally {
      setIsLoading(false)
    }
  } 
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-[#FF5722] mb-6">
          Forgot Password?
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Enter your email to receive a password reset link.
        </p>

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

          {/* Submit Button */}
          <Button
            type="submit"
            isLoading={isLoading}
            disabled={!email}
            onClick={() => {
              handleForgotPassword()
            }}
          >
            Send Reset Link
          </Button>
        </form>

        {/* Back to Login */}
        <p className="text-center text-gray-600 mt-4">
          <Link to="/login" className="text-[#FF5722] font-medium hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
