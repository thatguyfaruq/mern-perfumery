import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./layout/Navbar";
import Login from "./auth/Login";
import Signup from "./auth/SignUp";
import { useEffect, useState } from "react";

const cartItemFromLocalStoragePerf = JSON.parse(localStorage.getItem("cart")) || [];
function App() {
  const [cart, setCart] = useState(cartItemFromLocalStoragePerf);
  const handleAddToCart = (item) => {
    const isPresent = cart.some((product) => product.id === item.id);
    if (isPresent) {
      const updatedCart = cart.map((product) => {
        product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product;
      });
      setCart(updatedCart);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCart([...cart, newItem]);
      console.log([...cart, newItem]);
    }
  };

  // function to remove item
  function removeItem (id){
    let remove = cart.filter((cartItx) => cartItx.id !== id);
    setCart(remove);
  }
  // calc total price
  const calcTotalPrice = cart.reduce(
    (total, product) => total + parseFloat(product.price) * product.quantity,
    0
  );



  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route
              path="/"
              element={
                <Home
                  calcTotalPrice={ calcTotalPrice}
                  removeItem={removeItem}
                  cart={cart}
                  handleAddToCart={handleAddToCart}
                  setCart={setCart}
                />
              }
            />
          </Route>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
