import React, { Suspense } from "react";
import { defer, Await, Link, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";
import Loading from "../../components/Loading";
import { StarFilled } from "@ant-design/icons";

export function loader() {
  const url = "/api/host/vans";
  return defer({ vans: getVans(url) });
}

export default function Dashboard() {
  const vansPromise = useLoaderData();

  function renderVanComponent(vans) {
    const vanComponent = vans.map((van) => {
      return (
        <div key={van.id}>
          <div className="dashboard-vans-component">
            <div>
              <img
                className="host-vans-img"
                src={van.imageUrl}
                alt={`van${van.id}`}
              />
              <div className="host-vans-detail">
                <span className="host-vans-name">{van.name}</span>
                <span className="host-vans-price">${van.price}/day</span>
              </div>
            </div>
            <Link to={`vans/${van.id}`}>View</Link>
          </div>
        </div>
      );
    });

    return <>{vanComponent}</>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-income">
        <h2>Welcome!</h2>
        <div>
          <div>
            Income last <span>30 days</span>
          </div>
          <Link to="income">Details</Link>
        </div>
        <h1>$2,260</h1>
      </div>
      <div className="dashboard-review">
        <div>
          <div>Review score</div>
          <div className="dashboard-review-point">
            <StarFilled style={{ color: "#FF8C38" }} />
            5.0<span>/5</span>
          </div>
        </div>
        <Link to="reviews">Details</Link>
      </div>
      <div className="dashboard-vans">
        <div className="dashboard-vans-head">
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
        <Suspense fallback={<Loading />}>
          <Await resolve={vansPromise.vans}>{renderVanComponent}</Await>
        </Suspense>
      </div>
    </div>
  );
}
