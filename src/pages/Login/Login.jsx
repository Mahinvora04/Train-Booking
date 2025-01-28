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
      <div className="login-page">
        <div className="login-card">
          <div className="logo-container">
            <img src="/assets/logo1.png" alt="logo" className="logo-image" />
          </div>
          <form className="login-form">
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Phone Number / Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div
              className="login-card-bottom"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="remember-me-div"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
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
                  className="forget-password"
                  style={{ margin: 0, cursor: "pointer" }}
                >
                  Forgot Password?
                </p>
              </div>
            </div>

            <button type="submit" className="login-button">
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
