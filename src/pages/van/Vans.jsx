import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vansData, setVansData] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
  }, []);

  const vanComponents = vansData.map((van) => {
    return (
      <div key={van.id} className="van">
        <Link to={`${van.id}`}>
          <img className="van-image" src={van.imageUrl} alt="" />
          <div className="van-name-price">
            <h1 className="van-name">{van.name}</h1>
            <div>
              <span className="van-price">${van.price}</span>
              <span className="van-day">/day</span>
            </div>
          </div>
          <div className={`van-type ${van.type}`}>{van.type}</div>
        </Link>
      </div>
    );
  });

  return (
    <div className="vans-page">
      <h1 className="vans-title">Explore our van options</h1>
      <div className="vans-filter">
        <div className="vans-filter-btns">
          <button className="vans-filter-btn">Simple</button>
          <button className="vans-filter-btn">Luxury</button>
          <button className="vans-filter-btn">Rugged</button>
        </div>
        <>Clear filters</>
      </div>
      <div className="all-vans">{vanComponents}</div>
    </div>
  );
}
