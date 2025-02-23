import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { isEmpty } from "lodash";

const Navbar = ({
  leftLinks,
  rightComponents,
  rightMobileComponent,
  isAuthenticated
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left Side - Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link to={`${isAuthenticated ? '/dashboard' : '/'}`} className="text-2xl font-bold text-[#FF5722]">
              ScanToDine
            </Link>
            <div className="hidden md:flex space-x-6">
              {leftLinks.map((item, ind) => <Link key={ind} to={`${item.path}`} className="text-gray-700 hover:text-[#FF5722]">{item.name}</Link>)}
            </div>
          </div>

          {/* Right Side - Login & Register */}
          <div className="hidden md:flex space-x-4">
            {rightComponents.map((item) => item.component)}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 py-2">
            {leftLinks.map((item, ind) => <Link key={ind} to={`${item.path}`}  className="text-gray-700 hover:text-[#FF5722]">{item.name}</Link>)}

            <hr className="border-gray-300" />
            {rightMobileComponent && !isEmpty(rightMobileComponent) ? (
              rightMobileComponent.map((item) => item.component)
            ) : (
              rightComponents.map((item) => item.component)
            )}

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
