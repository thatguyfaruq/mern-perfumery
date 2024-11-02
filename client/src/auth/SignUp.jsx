import React, { useState } from "react";
import NavLogo from "../assets/perfumery-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import FrameImg from "../assets/frame.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../utils/ValidationSchema";
import toast from "react-hot-toast";

const SignUp = () => {
  const [isClicked,setIsClicked] = useState(false);
  const navigate = useNavigate();
  const navigateToGoogle = () => {
    window.open("https://www.google.com", "_blank");
  };
const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
} = useForm({
  resolver: yupResolver(signUpSchema),
});
  const onSubmit = async (data) => {
    console.log(data)
    setIsClicked(true)

    try {
      const req = await fetch(
        "https://mern-perfumery-dlex.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const res = await req.json();
console.log(res);
if(!res.success){
  toast.error(res.errMsg)
}

if(res.success){
  toast.success(res.message)
  navigate("/auth/login");
}

    } catch (error) {
console.log(error.message);

    } finally{
      setIsClicked(false)
    }
  };
  const btnTxt = isClicked ? "loading..." : "Sign Up"
  return (
    <main className="sign-up-container">
      <nav>
        <Link className="d-flex gap-2 p-5 text-decoration-none" to="/">
          <img src={NavLogo} alt="nav-logo" />
          <h2 className="text-white d-none d-lg-block">Perfume House</h2>
        </Link>
      </nav>
      <section className="d-flex h-100 align-items-center justify-content-center">
        <div className="form-container-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Get Started</h2>
            <p>Lets get started by filling out the information below</p>
            <div className="d-flex justify-content-between">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="first name"
                  placeholder="Enter Name"
                  {...register("firstName")}
                />
                <span className="text-danger">{errors.firstName?.message}</span>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="Last name"
                  placeholder="Enter Name"
                  {...register("lastName")}
                />
                <span className="text-danger">{errors.lastName?.message}</span>
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  {...register("email")}
                />
                <span className="text-danger">{errors.email?.message}</span>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                />
                <span className="text-danger">{errors.password?.message}</span>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm your Password"
                  {...register("confirmPassword")}
                />
                <span className="text-danger">{errors.confirmPassword?.message}</span>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I agree to Terms of Service and Privacy Policies"
                />
              </Form.Group>
            </div>
            <button className="sign-up w-100" variant=" " disabled={isSubmitting}> 
              {btnTxt}
            </button>

            <div className="d-flex justify-content-center">
              <img src={FrameImg} alt="frame-img" />
            </div>
            <div className="d-flex gap-5">
              <button
                className="btn-2 w-100 mt-2"
                type="submit"
                onClick={navigateToGoogle}>
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.2861 9.44575H21.4V9.4001H11.5V13.8001H17.7167C16.8097 16.3614 14.3727 18.2001 11.5 18.2001C7.85515 18.2001 4.9 15.2449 4.9 11.6001C4.9 7.95525 7.85515 5.0001 11.5 5.0001C13.1825 5.0001 14.7131 5.6348 15.8786 6.67155L18.9899 3.5602C17.0253 1.72925 14.3974 0.600098 11.5 0.600098C5.42525 0.600098 0.5 5.52535 0.5 11.6001C0.5 17.6748 5.42525 22.6001 11.5 22.6001C17.5748 22.6001 22.5 17.6748 22.5 11.6001C22.5 10.8625 22.4241 10.1426 22.2861 9.44575Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M1.76801 6.48015L5.38205 9.1306C6.35995 6.7095 8.72825 5.0001 11.4997 5.0001C13.1822 5.0001 14.7128 5.6348 15.8783 6.67155L18.9896 3.5602C17.025 1.72925 14.3971 0.600098 11.4997 0.600098C7.2746 0.600098 3.61051 2.98545 1.76801 6.48015Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M11.5 22.6001C14.3413 22.6001 16.923 21.5128 18.875 19.7445L15.4705 16.8636C14.3661 17.7002 12.9933 18.2001 11.5 18.2001C8.63893 18.2001 6.20957 16.3758 5.29437 13.8298L1.70728 16.5936C3.52778 20.1559 7.22487 22.6001 11.5 22.6001Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M22.286 9.4458H21.4V9.40015H11.5V13.8001H17.7167C17.2811 15.0305 16.4896 16.0914 15.4688 16.8642C15.4693 16.8636 15.4699 16.8636 15.4704 16.8631L18.875 19.744C18.6341 19.9629 22.5 17.1001 22.5 11.6001C22.5 10.8626 22.4241 10.1426 22.286 9.4458Z"
                    fill="#1976D2"
                  />
                </svg>
                Continue with Google
              </button>
            </div>
            <p className="text-center">
              Already have an account?
              <Link className="link" to="/auth/Login">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
