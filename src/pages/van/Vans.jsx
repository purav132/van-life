import React, { Suspense } from "react";
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVans } from "../../api";
import Loading from "../../components/Loading";

export function loader() {
  const url = "/api/vans";
  return defer({ vans: getVans(url) });
}

export default function Vans() {
  // const [vansData, setVansData] = React.useState([]);

  // React.useEffect(() => {
  //   fetch("/api/vans")
  //     .then((res) => res.json())
  //     .then((data) => setVansData(data.vans));
  // }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData();
  const typeFilter = searchParams.getAll("type");
  // console.log(typeFilter);

  function handleFilterChange(key, value) {
    setSearchParams((prevSearchParams) => {
      if (value === null) prevSearchParams.delete(key);
      else {
        const typeArray = prevSearchParams.getAll(key);
        if (typeArray.some((param) => param === value)) {
          // console.log("matched");
          const ind = typeArray.indexOf(value);
          typeArray.splice(ind, 1);
          // console.log(typeArray.length);
          if (typeArray.length > 0) {
            prevSearchParams.set(key, typeArray[0]);
            for (let i = 1; i < typeArray.length; i++)
              prevSearchParams.append(key, typeArray[i]);
          } else {
            prevSearchParams.delete(key);
          }
        } else {
          prevSearchParams.append(key, value);
        }
      }
      return prevSearchParams;
    });
  }

  function renderVanElement(vansData) {
    const displayVans =
      typeFilter.length > 0
        ? vansData.filter((van) =>
            typeFilter.some((filter) => filter === van.type.toLowerCase())
          )
        : vansData;
    // console.log(displayVans);

    const vanComponents = displayVans.map((van) => {
      return (
        <div key={van.id} className="van">
          <Link to={van.id} state={{ search: `?${searchParams.toString()}` }}>
            <img
              className="van-image"
              src={van.imageUrl}
              alt={`van${van.id}`}
            />
            <div className="van-name-price">
              <h1 className="van-name">{van.name}</h1>
              <div>
                <span className="van-price">${van.price}</span>
                <span className="van-day">/day</span>
              </div>
            </div>
            <div className={`van-type ${van.type} selected`}>{van.type}</div>
          </Link>
        </div>
      );
    });

    return (
      <>
        <div className="vans-filter">
          <div className="vans-filter-btns">
            <button
              onClick={() => handleFilterChange("type", "simple")}
              className={`van-type simple ${
                typeFilter.some((filter) => filter === "simple")
                  ? "selected"
                  : ""
              }`}
            >
              Simple
            </button>
            <button
              onClick={() => handleFilterChange("type", "luxury")}
              className={`van-type luxury ${
                typeFilter.some((filter) => filter === "luxury")
                  ? "selected"
                  : ""
              }`}
            >
              Luxury
            </button>
            <button
              onClick={() => handleFilterChange("type", "rugged")}
              className={`van-type rugged ${
                typeFilter.some((filter) => filter === "rugged")
                  ? "selected"
                  : ""
              }`}
            >
              Rugged
            </button>
          </div>
          {typeFilter.length > 0 ? (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="van-type-clear-filters"
            >
              Clear filters
            </button>
          ) : null}
        </div>
        <div className="all-vans">{vanComponents}</div>
      </>
    );
  }

  return (
    <div className="vans-page">
      <h1 className="vans-title">Explore our van options</h1>
      <Suspense fallback={<Loading />}>
        <Await resolve={dataPromise.vans}>{renderVanElement}</Await>
      </Suspense>
    </div>
  );
}
