import React, { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getVans } from "../../api";
import Loading from "../../components/Loading";

export function loader() {
  const url = "/api/host/vans";
  return defer({ vans: getVans(url) });
}

export default function HostVans() {
  // const [vans, setVans] = React.useState([]);

  // React.useEffect(() => {
  //   fetch("/api/host/vans")
  //     .then((res) => res.json())
  //     .then((data) => setVans(data.vans));
  // }, []);

  const vansPromise = useLoaderData();

  function renderVanComponent(vans) {
    const vanComponent = vans.map((van) => {
      return (
        <div key={van.id} className="host-vans-component">
          <Link to={van.id}>
            <div className="host-vans">
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
          </Link>
        </div>
      );
    });

    return <>{vanComponent}</>;
  }

  return (
    <div className="host-vans-page">
      <h1 className="host-vans-page-title">Your listed vans</h1>

      <Suspense fallback={<Loading />}>
        <Await resolve={vansPromise.vans}>{renderVanComponent}</Await>
      </Suspense>
    </div>
  );
}
