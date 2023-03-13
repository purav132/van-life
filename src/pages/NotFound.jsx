import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to=".." relative="path" className="not-found-page-link">
        Return to Home
      </Link>
    </div>
  );
}
