import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.scss";
const SignUp = () => {
  return (
    <>
      <div className="signUp">
        <div className="container">
          <div className="signUp__section">
            <div className="signUp__section-title">
              <h1>Sign up</h1>
              <p>Fill all field for create an account.</p>
            </div>
            <div className="signUp__section-form">
              <form>
                <div className="input">
                  <input type="text" id="name" required />
                  <label htmlFor="name">Username</label>
                </div>
                <div className="input">
                  <input type="email" id="email" required />
                  <label htmlFor="email">Email Address</label>
                </div>
                <div className="input">
                  <input type="password" id="password" required/>
                  <label htmlFor="password">Password</label>
                </div>
                <button type="submit">Sign Up</button>
              </form>
            </div>
            <div className="signUp__section-footer_title">
                <h1>Or</h1>
                <p>Sign up with...</p>
            </div>
            <div className="signUp__section-other_ways-signUp">
                <Link>
                <img src="/images/Facebook.svg" alt="facebook" />
                Sign up with Facebook
                </Link>
                <Link>
                <img src="/images/G_logo.svg" alt="google" />
                Sign up with Google
                </Link>
                <Link>
                <img src="/images/Apple_logo.svg" alt="apple" />
                Sign up with Apple
                </Link>
            </div>
            <div className="signUp__section-footer_link">
                <Link to={'/logIn'}>Already have an account? Please Log in.</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
