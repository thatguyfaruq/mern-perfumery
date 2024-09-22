import React from 'react'
import NavLogo from "../assets/perfumery-logo.svg";
import { Link } from 'react-router-dom';




const SignUp = () => {
  return (
    <main className="sign-up-container">
      <nav>
        <Link className="d-flex gap-2 p-5 text-decoration-none" to="/">
          <img src={NavLogo} alt="nav-logo" />
          <h2 className="text-white d-none d-lg-block">Perfume House</h2>
        </Link>
      </nav>
      <section>
        <div className="form-container-2">
          <form>
            <h2>Get Started</h2>
            <p>Lets get started by filling out the information below</p>
            <div>

            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SignUp