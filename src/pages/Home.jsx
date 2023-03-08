import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <h1 className="home-title">
        You got the travel plans, we got the travel vans.
      </h1>
      <h3 className="home-text">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </h3>
      <Link to="/vans" className="home-link">
        Find your van
      </Link>
    </div>
  );
}
