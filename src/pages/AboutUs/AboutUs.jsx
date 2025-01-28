import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="navbarDiv">
        <Navbar />
      </div>
      <div className="home-page">
        <div>
          <h1 className="heading">
            <span className="tourName">Van Lang </span>
            <span className="tour">Tour</span>
            <br />
            Your Gateway to Memorable Train Journeys
          </h1>
        </div>
        <div>
          <button className="viewButton">Click Here</button>
        </div>{" "}
      </div>
      <div className="content-container">
        <div className="content">
          <div>
            <img src="/assets/image 1.png" alt="" />
          </div>
          <div className="inner-content">
            <h1 className="aboutusHeading">Our Story</h1>
            <p className="aboutusParagraph">
              At Van Lang Tour, we believe that every journey holds the promise
              of adventure, discovery, and unforgettable memories. Established
              with a passion for travel and a commitment to seamless
              experiences, we are your trusted partner in exploring the world
              through train travel.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="inner-content">
            <h1 className="aboutusHeading">Who We Are</h1>
            <p className="aboutusParagraph">
              Van Lang Tour is a dedicated online platform designed to
              revolutionize the way you embark on train journeys. Whether you're
              a first-time traveler, a seasoned explorer, or planning a
              memorable trip with family and friends, we're here to make your
              travel dreams a reality.
            </p>
          </div>
          <div>
            <img src="/assets/image 2.png" alt="" />
          </div>
        </div>
        <div className="content">
          <div className="inner-content">
            <h1 className="aboutusHeading text-center">Our Mission</h1>
            <p className="aboutusParagraph text-center">
              Our mission is simple: to provide you with a hassle-free and
              enjoyable travel experience. We understand that the journey itself
              is an integral part of your adventure, and that's why we're
              committed to offering a wide selection of train routes, impeccable
              service, and competitive prices.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
