import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Booking.css";

const Booking = () => {
  return (
    <>
      <div className="navbarDiv">
        <Navbar />
      </div>
      <div className="bookingPage">
        <div className="bookingPageActionsContainer">
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

          <div className="bookingCardsContainer">
            <div className="bookingDetailsCard">
              <div className="detail timeDetail">
                <div className="detail">
                  <h1 className="time">12:00</h1>
                  <p className="placeName">Sai Gan</p>
                </div>
                <div className="detail">
                  <img src="/assets/Train.png" alt="" />
                </div>
                <div className="detail">
                  <h1 className="time">12:00</h1>
                  <p className="placeName">Ha Noi</p>
                </div>
              </div>
              <div className="detail">
                <p>first class - 24hrs00mins travel</p>
                <p>Details</p>
                <p className="price">
                  price <span className="priceNumber">1,000,000 </span>VND
                </p>
              </div>
              <div className="nextPageDiv detail">
                <img src="/assets/NextPage.png" alt="" />
              </div>
            </div>
            <div className="bookingDetailsCard">
              <div className="detail timeDetail">
                <div className="detail">
                  <h1 className="time">12:00</h1>
                  <p className="placeName">Sai Gan</p>
                </div>
                <div className="detail">
                  <img src="/assets/Train.png" alt="" />
                </div>
                <div className="detail">
                  <h1 className="time">12:00</h1>
                  <p className="placeName">Ha Noi</p>
                </div>
              </div>
              <div className="detail">
                <p>first class - 24hrs00mins travel</p>
                <p>Details</p>
                <p className="price">
                  price <span className="priceNumber">1,000,000 </span>VND
                </p>
              </div>
              <div className="nextPageDiv detail">
                <img src="/assets/NextPage.png" alt="" />
              </div>
            </div>{" "}
            <div className="bookingDetailsCard">
              <div className="detail timeDetail">
                <div className="detail">
                  <h1 className="time">12:00</h1>
                  <p className="placeName">Sai Gan</p>
                </div>
                <div className="detail">
                  <img src="/assets/Train.png" alt="" />
                </div>
                <div className="detail">
                  <h1 className="time">12:00</h1>
                  <p className="placeName">Ha Noi</p>
                </div>
              </div>
              <div className="detail">
                <p className="text-start">first class - 24hrs00mins travel</p>
                <p className="text-start">Details</p>
                <p className="price">
                  price <span className="priceNumber">1,000,000 </span>VND
                </p>
              </div>
              <div className="nextPageDiv detail">
                <img src="/assets/NextPage.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Booking;
