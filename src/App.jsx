import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Blogs from "./pages/Blogs"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import { Routes, Route } from 'react-router-dom'

import './App.css'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
