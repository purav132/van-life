import React, { Suspense } from "react";
import {
  Link,
  Outlet,
  NavLink,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVans } from "../../api";
import Loading from "../../components/Loading";

export function loader({ params }) {
  const url = `/api/host/vans/${params.id}`;
  return defer({ van: getVans(url) });
}

export default function HostVanDetail() {
  // const [van, setVan] = React.useState(null);
  // const { id } = useParams();
  // React.useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setVan(data.vans));
  // }, [id]);

  const vanPromise = useLoaderData();

  const activeStyle = {
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "21px",
    textDecoration: "underline",
    color: "#161616",
  };

  function renderHostVanDetail(van) {
    return (
      <div className="host-vans-details">
        <div className="host-van-details-common">
          <img className="host-vans-details-img" src={van.imageUrl} alt="van" />
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
    );
  }

  return (
    <div className="host-vans-page">
      <Link to=".." relative="path" className="van-details-back-link">
        &larr; Back to all vans
      </Link>
      <Suspense fallback={<Loading />}>
        <Await resolve={vanPromise.van}>{renderHostVanDetail}</Await>
      </Suspense>
    </div>
  );
}
