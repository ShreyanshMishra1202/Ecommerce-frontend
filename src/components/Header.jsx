import React from 'react'
import { RiShoppingCartFill } from "react-icons/ri"
import { Link, useNavigate } from 'react-router-dom'

const Header = ({ productCount, isLoggedIn, onLogout, currentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <header className="bg-white sm:h-16 flex justify-between items-center sm:px-20 px-6">
      <Link to={isLoggedIn ? "/products" : "/"}>
        <img
          className="w-32 sm:w-48 object-contain"
          src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png"
          alt="Flipkart Logo"
        />
      </Link>
      <div className="flex items-center gap-6">
        {isLoggedIn ? (
          <>
            <button
              onClick={handleLogout}
              className="text-sm font-semibold text-gray-700 hover:text-orange-500"
            >
              Logout
            </button>
            <Link to="/cart" className="relative">
              <RiShoppingCartFill className="text-3xl text-orange-500" />
              <span className="absolute -top-2 -right-1 flex items-center justify-center text-xs font-semibold text-white bg-orange-500 rounded-full min-w-[20px] h-[20px] px-1 shadow-md">
                {productCount}
              </span>
            </Link>
          </>
        ) : (
          <>
            <Link 
              to="/login" 
              className="text-sm font-semibold text-gray-700 hover:text-orange-500"
            >
              Login
            </Link>
            <Link 
              to="/" 
              className="text-sm font-semibold text-gray-700 hover:text-orange-500"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
