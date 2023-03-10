import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const van = useOutletContext();

  return (
    <div className="host-van-info">
      <br />
      <div>
        <span>Name: </span>
        {van.name}
      </div>
      <div>
        <span>category: </span>
        {van.type}
      </div>
      <div>
        <span>Description: </span>
        {van.description}
      </div>
      <div>
        <span>Visibility: </span>
        Public
      </div>
    </div>
  );
}
