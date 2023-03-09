import React from "react";
import { Link } from "react-router-dom";

export default function DisplayAllVans(props) {
  return (
    <div className="van">
      <Link to={`/vans/${props.van.id}`}>
        <img className="van-image" src={props.van.imageUrl} alt="" />
        <div className="van-name-price">
          <h1 className="van-name">{props.van.name}</h1>
          <div>
            <span className="van-price">${props.van.price}</span>
            <span className="van-day">/day</span>
          </div>
        </div>
        <div className={`van-type ${props.van.type} selected`}>
          {props.van.type[0].toUpperCase() + props.van.type.slice(1)}
        </div>
      </Link>
    </div>
  );
}
