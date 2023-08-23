import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Blogs from "./pages/Blogs"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Blog from "./pages/Blog"
import Product from "./pages/Product"
import ErrorPage from "./pages/ErrorPage"
import Checkout from "./pages/Checkout"
import ContactUs from "./pages/ContactUs"
import Register from "./components/Register"
import Login from "./components/Login"
import CheckToaster from "./pages/CheckToaster"
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<Blog/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/check" element={<CheckToaster/>} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
