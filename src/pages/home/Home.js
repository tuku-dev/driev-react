import React from "react";
import Header from "../../shared/header/Header";
import BookADrive from "./sections/BookADrive";
import Logo from "../../assets/imgs/driEV.svg";
import "./home.css";
import RecomendedPlans from "./sections/recommended-plans/RecomendedPlans";
import ThreeCards from "./sections/ThreeCards";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-page">
        <div className="hero-section pb-4 mb-3">
          <div className="container px-3 px-lg-1">
            <div className="section-title-container text-center">
              <h3 className="text-white section-title d-inline-flex align-items-baseline justify-content-center">
                <span>Book a</span>
                <img src={Logo} alt="" />
                <span className="bottom-border"></span>
              </h3>
            </div>
            <BookADrive />
          </div>
          <div className="container px-3 px-lg-1">
            <RecomendedPlans />
          </div>
        </div>

        <ThreeCards />
      </div>
    </>
  );
}
