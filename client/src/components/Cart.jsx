import React from "react";
import negativeW from "../assets/negative-w.png";
import positiveP from "../assets/positive-p.png";

const Cart = () => {
  return (
    <>
      <main className="cart-container d-flex flex-column justify-content-center align-items-center">
        <h1>My Cart Preview</h1>
        <div className="cart-item d-flex w-100 gap-2">
          <img
            src="https://res.cloudinary.com/dov4vedye/image/upload/v1727625287/polo_bdnlh4.png"
            alt="Ralph Lauren Perfume"
            width={95}
            height={98}
          />

          <div className="d-flex flex-column justify-content-between">
            <h2>Ralph Lauren Perfume</h2>

            <div className="d-flex">
              <button className="button">-</button>
              <p>1</p>
              <button className="button">+</button>
            </div>

            <div className="d-flex justify-content-between">
              <p>N6,000</p>
              <button className="remove btn btn-danger btn-outline">Remove</button>
            </div>
          </div>
        </div>

        <div className="cart-item d-flex w-100 gap-2">
          <img
            src="https://res.cloudinary.com/dov4vedye/image/upload/v1727625287/oud-touch_s48kat.png"
            alt="Oud Touch Franck Oliver"
            width={95}
            height={98}
          />

          <div className="d-flex flex-column justify-content-between">
            <h2>Oud Touch Franck Oliver</h2>

            <div className="d-flex">
              <button className="button">-</button>
              <p>1</p>
              <button className="button">+</button>
            </div>

            <div className="d-flex justify-content-between">
              <p>N6,000</p>
              <button className="remove btn btn-danger btn-outline">Remove</button>
            </div>
          </div>
        </div>

        <div className="cart-item d-flex w-100 gap-2">
          <img
            src="https://res.cloudinary.com/dov4vedye/image/upload/v1727625287/asad_supy0b.png"
            alt="Asad Mousouff"
            width={95}
            height={98}
          />

          <div className="d-flex flex-column justify-content-between">
            <h2>Asad Mousouff</h2>

            <div className="d-flex">
              <button className="button">-</button>
              <p>1</p>
              <button className="button">+</button>
            </div>

            <div className="d-flex justify-content-between">
              <p>N6,000</p>
              <button className="remove btn btn-danger btn-outline">Remove</button>
            </div>
          </div>
        </div>

        <div className="cart-item d-flex w-100 gap-2">
          <img
            src="https://res.cloudinary.com/dov4vedye/image/upload/v1727625287/elegance-essence_eszzv2.png"
            alt="Elegance Essence"
            width={95}
            height={98}
          />

          <div className="d-flex flex-column justify-content-between">
            <h2>Elegance Essence</h2>

            <div className="d-flex">
              <button className="button">-</button>
              <p>1</p>
              <button className="bu">+</button>
            </div>

            <div className="d-flex justify-content-between">
              <p>N6,000</p>
              <button className="remove btn btn-danger btn-outline">Remove</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
