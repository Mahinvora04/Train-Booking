import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./pages/Booking/Booking";
import AboutUs from "./pages/AboutUs/AboutUs";
import MainPage from "./pages/MainPage/MainPage";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
