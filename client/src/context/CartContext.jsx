import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();
const cartItemFromLocalStoragePerf = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(cartItemFromLocalStoragePerf);
  const token = localStorage.getItem("perf-token");
  function logout() {
    localStorage.removeItem("perf-token");
    localStorage.removeItem("fullname");
    setUser(null);
  }
  const verified = async () => {
    try {
      const req = await fetch("http://localhost:3000/api/auth/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await req.json();
      if (res.success) {
        setUser(res.user);
      } else {
        setUser(null);
      }
    } catch (error) {}
  };

  const handleAddToCart = (item) => {
    const isPresent = cart.some((product) => product._id === item._id);
    if (isPresent) {
      const updatedCart = cart.map((product) => {
        product._id === item._id
          ? { ...product, quantity: product.quantity + 1 }
          : product;
      });
      setCart(updatedCart);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCart([...cart, newItem]);
      console.log([...cart, newItem]);
      toast.success("added to cart")
    }
    console.log("added");
    
  };

  // function to remove item
  function removeItem(_id) {
    let remove = cart.filter((cartItx) => cartItx._id !== _id);
    setCart(remove);
  }
  // calc total price
  const calcTotalPrice = cart.reduce(
    (total, product) => total + parseFloat(product.price) * product.quantity,
    0
  );
  // handle inc
  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cart.map((product) =>
      product._id === itemId ? { ...product, quantity: product.quantity + 1 } : product
    );
    setCart(updatedCart);
  };

  // handle dec
  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = cart.map((product) => {
      if (product._id === itemId) {
        const newQuantity = product.quantity > 1 ? product.quantity - 1 : 1;
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setCart(updatedCart);
  };

  useEffect(() => {
    if (token) {
      verified()
    };
  }, [token]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        cart,
        setCart,
        handleDecreaseQuantity,
        handleIncreaseQuantity,
        calcTotalPrice,
        removeItem,
        user,
        logout,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
