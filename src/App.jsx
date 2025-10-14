import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import ProductDetails from './components/ProductDetails'
import Header from './components/Header'
import Footer from './components/Footer'
import CartPage from './pages/CartPage'
import PageNotFound from './components/PageNotFound'
import SignUpPage from './pages/SignUpPage'

const App = () => { 
  const savedCart = JSON.parse(localStorage.getItem("my-cart") || "{}")
  const [cart, setCart] = useState(savedCart)

  const handleAddToCart = (productId, count) => {
    count = +count
    const newCart = { ...cart, [productId]: (cart[productId] || 0) + count }
    setCart(newCart)
    localStorage.setItem("my-cart", JSON.stringify(newCart))
  }

  const totalCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0)

  return (
    <div className="min-h-screen flex flex-col">
      <Header productCount={totalCount} />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Main addToCart={handleAddToCart} />} />
          <Route path="/details/:id" element={<ProductDetails addToCart={handleAddToCart} />} />
          <Route path="/cart" element={<CartPage setCart={setCart} updateCart={setCart} data={cart} />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
