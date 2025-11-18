import React, { useState } from 'react'
import Main from './pages/Main'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import Header from './components/Header'
import Footer from './components/Footer'
import CartPage from './pages/CartPage'
import PageNotFound from './components/PageNotFound'
import SignUpPage from './pages/SignUpPage'
<<<<<<< HEAD
import LoginPage from './pages/LoginPage'

const App = () => { 
  // Check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  });

  const savedCart = JSON.parse(localStorage.getItem("my-cart") || "{}")
  const [cart, setCart] = useState(savedCart)

  // Clear cart function
  const clearCart = () => {
    setCart({});
    localStorage.setItem("my-cart", JSON.stringify({}));
  };

  // Handle login - always clear cart on login
  const handleLogin = (userData) => {
    // Always clear cart when logging in
    clearCart();
    
    setIsLoggedIn(true);
    setCurrentUser(userData);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(userData));
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    // Don't clear cart on logout, keep it for when user logs back in
  };

  // Handle signup - clear cart
  const handleSignup = (userData) => {
    clearCart();
    setIsLoggedIn(true);
    setCurrentUser(userData);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(userData));
  };

  const handleAddToCart = (productId, count) => {
    if (!isLoggedIn) {
      alert("Please login to add items to cart");
      return;
    }
    count = +count
    const newCart = { ...cart, [productId]: (cart[productId] || 0) + count }
    setCart(newCart)
    localStorage.setItem("my-cart", JSON.stringify(newCart))
=======
import LoginPage from './pages/LoginPage' // New import


const App = () => { 
    const savedDataString = localStorage.getItem("my-cart") || "{}";
    const savedData = JSON.parse(savedDataString);
    const [cart,setCart] = useState(savedData);
    const hanldeAddToCart = function(productId,count){
    count=+count;
    let oldCount = cart[productId] || 0;
    const newCart = {...cart, [productId]:oldCount+count};
    updateCart(newCart);
  };

  function updateCart(newCart){
    setCart(newCart);
    localStorage.setItem("my-cart", JSON.stringify(newCart));
>>>>>>> 004533bdc89dd97841ca523386e422d5632461c8
  }



  const totalCount= Object.keys(cart).reduce(function (output,current){
    return output+cart[current];
  },0);
  console.log(cart);



  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col">
      <Header 
        productCount={totalCount} 
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        currentUser={currentUser}
      />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<SignUpPage onSignup={handleSignup} />} />
          <Route path="/products" element={<Main addToCart={handleAddToCart} isLoggedIn={isLoggedIn} />} />
          <Route path="/details/:id" element={<ProductDetails addToCart={handleAddToCart} isLoggedIn={isLoggedIn} />} />
          <Route path="/cart" element={<CartPage setCart={setCart} updateCart={setCart} data={cart} isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUpPage onSignup={handleSignup} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
=======
    <div>
    <>
    <Header productCount={totalCount} />
    <div className='grow'>
      <Routes>
      <Route path='/' element={<Main addToCart={hanldeAddToCart} />}/>
      <Route path='/details/:id' element={<ProductDetails addToCart={hanldeAddToCart} />}/>
      <Route path='/cart' element={<CartPage setCart={setCart} updateCart={updateCart} data={cart}/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/login' element={<LoginPage/>}/> {/* New Route */}
      <Route path="/notfound" element={<PageNotFound/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
    
>>>>>>> 004533bdc89dd97841ca523386e422d5632461c8
    </div>
  )
}

export default App