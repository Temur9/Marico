import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
const Login = () => {
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="login__section">
            <div className="login__section-title">
              <h1>Log in</h1>
              <p>Login into existing account.</p>
            </div>
            <div className="login__section-form">
              <form>
                <div className="input">
                  <input type="text" id="name" required />
                  <label htmlFor="name">Username</label>
                </div>
                <div className="input">
                  <input type="password" id="password" required />
                  <label htmlFor="password">Password</label>
                </div>
                <button type="submit">Log In</button>
              </form>
            </div>
            <div className="login__section-footer_title">
              <h1>Or</h1>
              <p>Login up with...</p>
            </div>
            <div className="login__section-other_ways-login">
              <Link>
                <img src="/images/Facebook.svg" alt="facebook" />
                Log in with Facebook
              </Link>
              <Link>
                <img src="/images/G_logo.svg" alt="google" />
                Log in with Google
              </Link>
              <Link>
                <img src="/images/Apple_logo.svg" alt="apple" />
                Log in with Apple
              </Link>
            </div>
            <div className="login__section-footer_link">
              <Link to={"/signUp"}>Don’t have an account? Create One.</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
