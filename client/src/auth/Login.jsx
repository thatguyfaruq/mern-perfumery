import React from 'react'
import NavLogo from "../assets/perfumery-logo.svg";
import FrameImg from "../assets/frame.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <main className="sign-in-container">
        <nav className="">
          <Link className='d-flex gap-2 p-5' to="/">
            <img src={NavLogo} alt="nav-logo" />
            <h2 className="text-white d-none d-lg-block">Perfume House</h2>
          </Link>
        </nav>

        <section className="d-flex flex-column justify-content-center align-items-center">
          <div className="form-container">
            <form>
              <h2>Welcome Back</h2>
              <p>Fill in your information to access your account.</p>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <p>Forgot Password</p>
              <Button className="w-100" variant="primary">
                Sign In
              </Button>
              <img src={FrameImg} alt="frame-img" />
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login