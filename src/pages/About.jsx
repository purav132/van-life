import React from "react";
import backgroundImg from "../assets/images/background-about.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page">
      <img className="about-pic" src={backgroundImg} alt="" />
      <h1 className="abou-title">
        Don't squeeze in a sedan when you could relax in a van.
      </h1>
      <div className="about-text">
        <span>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br />
          <br />
        </span>
        <span>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </span>
      </div>
      <div className="about-van">
        <div className="about-van-text">
          <span>Your destination is waiting.</span>
          <span>Your van is ready.</span>
        </div>
        <Link to="/vans" className="about-van-link">
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
