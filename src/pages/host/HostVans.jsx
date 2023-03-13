import React from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanComponent = vans.map((van) => {
    return (
      <div key={van.id} className="host-vans-component">
        <Link to={van.id}>
          <div className="host-vans">
            <img className="host-vans-img" src={van.imageUrl} alt="" />
            <div className="host-vans-detail">
              <span className="host-vans-name">{van.name}</span>
              <span className="host-vans-price">${van.price}/day</span>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="host-vans-page">
      <h1 className="host-vans-page-title">Your listed vans</h1>
      {vans.length > 0 ? <div>{vanComponent}</div> : <h2>Loading...</h2>}
    </div>
  );
}
