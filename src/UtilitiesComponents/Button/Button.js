import { Loader2 } from "lucide-react";

const Button = ({ 
  children, 
  onClick, 
  isLoading = false, 
  size = "md", 
  variant = "primary", 
  disabled = false 
}) => {
  
  // Size Variants
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
    xl: "px-6 py-4 text-xl"
  };

  // Style Variants
  const variantClasses = {
    primary: "bg-[#FF5722] text-white hover:bg-[#e64a19]",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    blue: "border border-[#1E88E5] text-[#1E88E5] hover:bg-[#1E88E5] hover:text-white",
    red: "border border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722] hover:text-white"
  };

  return (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`w-full flex items-center justify-center font-semibold rounded-md transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed': ''}`}
    >
      {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
      {children}
    </button>
  );
};

export default Button;
