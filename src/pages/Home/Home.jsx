import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="navbarDiv">
        <Navbar />
      </div>
      <div className="homePage">
        <div className="container text-left homePageHeading">
          <h1 className="heading">
            Relax with <br />
            <span className="tourName">Van Lang Tour</span>
          </h1>
          <button className="viewButton">Read More!</button>
        </div>
      </div>
      <div className="highlights">
        <div className="highlightContainer">
          <img className="highlightImage" src="/assets/Monitor.png" alt="" />
          <p className="highlightParagraph">
            It’s very easy to order a train ticket online, VLT E-ticket can not
            be lost or forgotten at home
          </p>
        </div>
        <div className="highlightContainer">
          <img className="highlightImage" src="/assets/Internet.png" alt="" />
          <p className="highlightParagraph">
            To order ticket all you need is Internet, a couple minutes and a
            payment card. Grab bonuses and discounts.
          </p>
        </div>
      </div>
      <div className="homePageTourPackagesContainer">
        <div className="actionsContainer">
          <div className="action">
            <p className="actionName">Keywords</p>
            <button className="actionButton">
              <span className="actionButtonContent">
                Any
                <img src="/assets/Search.png" alt="" />
              </span>
            </button>
          </div>
          <div className="action">
            <p className="actionName">Activity</p>
            <button className="actionButton">
              <span className="actionButtonContent">
                Any
                <img src="/assets/DownButton.png" alt="" />
              </span>
            </button>
          </div>
          <div className="action">
            <p className="actionName">Destination</p>
            <button className="actionButton">
              <span className="actionButtonContent">
                Any
                <img src="/assets/DownButton.png" alt="" />
              </span>
            </button>
          </div>
          <div className="action">
            <p className="actionName">Date</p>
            <button className="actionButton">
              <span className="actionButtonContent">
                Any
                <img src="/assets/Schedule.png" alt="" />
              </span>
            </button>
          </div>
          <div className="action">
            <p className="actionName">Search</p>
            <button className="actionButton">
              <span className="actionButtonContent">
                Search
                <img src="/assets/Search.png" alt="" />
              </span>
            </button>
          </div>
        </div>
        <div className="toursContainer">
          <div className="tourCard">
            <img
              className="tourCardImage"
              src="/assets/hanoi-box.png"
              alt="Tour 1"
            />
            <div className="price">From $60</div>
            <p className="tourName text-start pl-2">Sài Gòn - Hà Nội</p>
            <p className="tourTime text-start pl-2">
              {" "}
              <img className="clockImg" src="/assets/clock.png" alt="" />
              <span>31 hours</span>
            </p>{" "}
          </div>
          <div className="tourCard">
            <img
              className="tourCardImage"
              src="/assets/da-nang.png"
              alt="Tour 2"
            />
            <div className="price">From $30</div>
            <p className="tourName text-start pl-2">Hà Dội - Dà Nẵng</p>
            <p className="tourTime text-start pl-2">
              {" "}
              <img className="clockImg" src="/assets/clock.png" alt="" />
              <span>31 hours</span>
            </p>{" "}
          </div>
          <div className="tourCard">
            <img
              className="tourCardImage"
              src="/assets/halong-box.png"
              alt="Tour 3"
            />
            <div className="price">From $10</div>
            <p className="tourName text-start pl-2">Bắc Ninh - Hạ Long</p>
            <p className="tourTime text-start pl-2">
              {" "}
              <img className="clockImg" src="/assets/clock.png" alt="" />
              <span>31 hours</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
