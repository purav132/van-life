import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();

  const [van, setVan] = React.useState([]);

  const location = useLocation();
  const search = location.state?.search || "";

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return van ? (
    <div className="van-details-page">
      <Link
        to={`..${search}`}
        relative="path"
        className="van-details-back-link"
      >
        &larr; Back to vans
      </Link>
      <img src={van.imageUrl} alt="" className="van-details-image" />
      <div className={`van-type ${van.type} selected`}>{van.type}</div>
      <h1 className="van-details-name">{van.name}</h1>
      <div className="van-details-price-day">
        <span className="van-details-price">${van.price}</span>
        <span className="van-details-day">/day</span>
      </div>
      <p className="van-details-description">{van.description}</p>
      <button className="van-details-btn">Rent this van</button>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
