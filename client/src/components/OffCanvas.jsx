import React from 'react'
import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import menuIcon from "../assets/ci_hamburger-lg.svg"
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import Logout from './Logout';
import arrowUp from '../assets/arrow-up.svg';
import arrowDown from '../assets/arrow-down.svg';

const OffCanvas = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const [isReveal, setIsReveal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = localStorage.getItem("perf-token");
  const fullName = localStorage.getItem("fullname");

  const { user } = useContext(CartContext);

  function toggleIsRevealed() {
    isReveal ? setIsReveal(false) : setIsReveal(true);
  }

  return (
    <>
      <div onClick={handleShow}>
        <img src={menuIcon} alt="menu-icon" />
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Body>
                    {token ? (
            <>
              <div className='position-relative'>
                <h1 className=''>
                  {`Hi, ${fullName}`}
                  <span className='ms-3'>
                    {isReveal ? (
                      <img
                        src={arrowUp}
                        alt='dropdown'
                        role='button'
                        onClick={toggleIsRevealed}
                      />
                    ) : (
                      <img
                        src={arrowDown}
                        alt='dropdown'
                        role='button'
                        onClick={toggleIsRevealed}
                      />
                    )}
                  </span>
                </h1>
                <div>
                  {isReveal && <Logout />}
                </div>
              </div>
            </>
          ) : (
            <>

          <div className="d-flex flex-column container mt-3 gap-3">
            <button className="login-btn w-100">
              <Link className="text-decoration-none login-link" to="/auth/login">
                Log In
              </Link>
            </button>
            <button className="sign-up-btn w-100">
              <Link className="text-decoration-none sign-up-link" to="/auth/signup">
                Sign Up
              </Link>
            </button>
          </div>
          </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;