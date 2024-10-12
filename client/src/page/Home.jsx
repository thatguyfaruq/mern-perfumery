import React from 'react'
import Product from '../components/Product'
import Cart from '../components/Cart'

const Home = ({ setCart, cart, handleAddToCart, removeItem, calcTotalPrice, handleIncreaseQuantity, handleDecreaseQuantity }) => {
  return (
    <>
      <main className="container py-4">
        <section className="row">
          <div className="col-lg-8">
            <Product cart={cart} setCart={setCart} handleAddToCart={handleAddToCart} />
          </div>
          <div className="col-md-4">
            <Cart handleDecreaseQuantity={handleDecreaseQuantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
              cart={cart}
              setCart={setCart}
              removeItem={removeItem}
              calcTotalPrice={calcTotalPrice}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home