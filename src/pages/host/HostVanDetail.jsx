import React from "react";
import { Link, useParams, Outlet, NavLink } from "react-router-dom";

export default function HostVanDetail() {
  const [van, setVan] = React.useState([]);
  const params = useParams();
  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, [params.id]);

  const activeStyle = {
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "21px",
    textDecoration: "underline",
    color: "#161616",
  };

  if (!van) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="host-vans-page">
      <Link to=".." relative="path" className="van-details-back-link">
        &larr; Back to all vans
      </Link>
      <div className="host-vans-details">
        <div className="host-van-details-common">
          <img className="host-vans-details-img" src={van.imageUrl} alt="" />
          <div>
            <div className={`van-type ${van.type} selected`}>{van.type}</div>
            <div className="host-vans-details-name">{van.name}</div>
            <div>
              <span className="host-vans-details-price">${van.price}</span>
              <span className="host-vans-details-day">/day</span>
            </div>
          </div>
        </div>
        <nav>
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={van} />
      </div>
    </div>
  );
}
