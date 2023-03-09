import React from "react";
import DisplayAllVans from "./DisplayAllVans";

export default function Vans() {
  const [vansData, setVansData] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
  }, []);

  //   console.log(vansData);

  const vanComponents = vansData.map((van) => <DisplayAllVans van={van} />);

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
