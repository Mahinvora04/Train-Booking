import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./SignUp.css";

const SignUp = () => {
  return (
    <>
      <div className="navbarDiv">
        <Navbar />
      </div>
      <div className="signUpPage">
        <div className="signUpCard">
          <img className="numberSlideImage" src="/assets/numberSlide.png" alt="number slide" />
          <div className="innerCard">
            <h2 className="text-start pl-2">
              Ready to join Van Lang Tour? Let’s get started
            </h2>
            <p className="text-start pl-2">
              We need a few details about you to create your account profile
            </p>

            <div className="formGroup">
              <label className="text-start pl-2">Preferred Language *</label>
              <select className="languageSelect">
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
                <option value="german">German</option>
              </select>
            </div>

            <p className="infoText text-start pl-2">
              Name* <br />
              In order to earn and redeem points, your name must match the name
              on your government issued ID photo used when travelling.
            </p>

            <div className="nameFields">
              <input
                className="inputFields"
                type="text"
                placeholder="First Name"
                required
              />
              <input
                className="inputFields"
                type="text"
                placeholder="Middle Name"
              />
            </div>

            <div className="nameFields">
              <input
                className="inputFields"
                type="text"
                placeholder="Last Name"
                required
              />
              <select>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <p className="infoText text-start pl-2">Date of birth *</p>

            <div className="dobField">
              <input
                className="dateOfBirthField"
                type="date"
                placeholder="Date of Birth"
                required
              />
            </div>

            <button className="nextButton ">Next</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
