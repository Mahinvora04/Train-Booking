import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container text-white py-5">
      <div className="container">
        <div className="footer-inner-container row text-center text-sm-left">
          <div className="heading col-12 col-sm-6 col-lg-4 mb-4">
            <h5 className="font-weight-bold mb-3 fs-3">
              WE ARE VARY HAPPY THAT YOU CHOOSE US
            </h5>
            <p className="paragraph">
              Thank you for trusting us for choosing trips, exploring, traveling
              with relatives and friends, or for your own experiences.
            </p>
          </div>

          <div className="links d-flex justify-content-end ">
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <h5 className="link-heading font-weight-bold mb-3">Home</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/aboutus" className="text-white text-decoration-none hover:text-warning">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/booking" className="text-white text-decoration-none hover:text-warning">
                    Booking
                  </Link>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <h5 className="link-heading text-decoration-none font-weight-bold mb-3">Contact Us</h5>
              <p className="mb-2">0703169545</p>
              <p>
                <a
                  href="mailto:contact@vanlang.tour"
                  className="text-white text-decoration-none hover:text-warning"
                >
                  contact@vanlang.tour
                </a>
              </p>
            </div>
            {/* Social Links */}
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <h5 className="link-heading text-decoration-none font-weight-bold mb-3">Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none hover:text-warning"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none hover:text-warning"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-left border-top ">
          <p className="paragraph pt-2">
            &copy; Van Lang Tours. {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
