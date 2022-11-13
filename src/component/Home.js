import React from "react";
import Bg from "../assets/images/bg.jpg";
export default function Home() {
  return (
    <div className="card bigCard text-bg-dark border-0">
      <img src={Bg} className="card-img" alt="Background" height="695px" />
      <div className="card-img-overlay d-flex align-items-center ">
        <div className="container">
          <h5 className="card-title display-3 fw-bold ">NEW SEASON ARRIVALS</h5>
          <p className="card-text fs-1">CHECK OUT ALL THE TRENDS</p>
        </div>
      </div>
    </div>
  );
}
