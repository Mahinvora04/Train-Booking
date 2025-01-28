import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <div className="navbarDiv">
        <Navbar />
      </div>
      <div className="home-page">
        <div>
          <h1 className="heading">
            Welcome to <br />
            <span className="tourName">Van Lang </span>
            <span className="tour">Tour</span>
          </h1>
        </div>
        <div>
          <button className="viewButton">View Page</button>
        </div>{" "}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
