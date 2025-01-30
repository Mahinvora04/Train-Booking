import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="navbarDiv">
        <Navbar />
      </div>
      <div className="loginPage">
        <div className="loginCard">
          <div className="logoContainer">
            <img src="/assets/logo1.png" alt="logo" className="logoImage" />
          </div>
          <form className="loginForm">
            <div className="loginFormFroup">
              <input
                type="email"
                id="email"
                placeholder="Phone Number / Email"
                required
              />
            </div>
            <div className="loginFormFroup">
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="loginCardBottom">
              <div className="rememberMeDiv">
                <input
                  type="checkbox"
                  id="remember"
                  value="remember me"
                  name="remember"
                />
                <label htmlFor="remember">Remember</label>
              </div>
              <div>
                <p
                  className="forgetPassword"
                  style={{ margin: 0, cursor: "pointer" }}
                >
                  Forgot Password?
                </p>
              </div>
            </div>

            <button type="submit" className="loginButton">
              Login
            </button>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
