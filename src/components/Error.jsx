import React from "react";
import { useRouteError, Link } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Error: {error.message}</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
      <br />
      <Link to=".." relative="path" className="not-found-page-link">
        Return to Home
      </Link>
    </div>
  );
}
