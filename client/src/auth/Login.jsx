import React from 'react'
import NavLogo from "../assets/perfumery-logo.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
  return (
    <>
      <main className="sign-in-container">
        <nav className="d-flex gap-2 p-5">
          <img src={NavLogo} alt="nav-logo" />
          <h2>Perfume House</h2>
        </nav>

        <div className="form-container ">
          <form>
            <h2>Welcome Back</h2>
            <p>Fill in your information to access your account.</p>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>

            <Button variant="primary">Sign In</Button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login