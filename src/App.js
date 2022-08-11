import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Carousel from "./components/Carousel"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import { ROUTES } from "./scripts/constants"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path={ROUTES.home.path} element={<Carousel />} />
        </Routes>
        <Routes>
          <Route path={ROUTES.products.path} element={<Products />} />
        </Routes>
        <Routes>
          <Route path={ROUTES.cart.path} element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
