import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const van = useOutletContext();

  return (
    <div className="host-van-pricing">
      <div>
        <span>${van.price}</span>/day
      </div>
    </div>
  );
}
