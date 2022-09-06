import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import Carousel from "./components/Carousel";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Logout from "./components/Logout";
import { ROUTES } from "./scripts/constants";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function App() {
  const [cart, setCart] = useState([]);
  console.log("__App__", cart);

  const removeItem = (id) => {
    setCart((prev) => prev.filter((usePrev) => usePrev.id !== id));
  };
  const user = useSelector(selectUser);
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="flex-stretch">
          <Routes>
            <Route path={ROUTES.home.path} element={<Carousel />} />
          </Routes>
          <Routes>
            <Route
              path={ROUTES.Account.path}
              element={user ? <Logout /> : <Account />}
            />
          </Routes>
          <Routes>
            <Route
              path={ROUTES.products.path}
              element={<Products cart={cart} setCart={setCart} />}
            />
          </Routes>
          <Routes>
            <Route
              path={ROUTES.cart.path}
              element={
                <Cart cart={cart} setCart={setCart} removeItem={removeItem} />
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
