import React from "react";
import "./Information.css";
function Information() {
  return (
    <div data-aos="fade-up" className="container mb-5 mt-5 pt-5 pb-5 text-center rowBg">
      <h1 className="whoAreWe" >
        We are
        <span className="info-span">
          {" "}
          Interior Design Practice Based all over Italia{" "}
        </span>{" "}
        devoted to
        <span className="info-span"> simplicity</span>. We are led by our desire
        to create<span className="info-span"> meaningful spaces </span>that
        enhance the quality of your life.
      </h1>
    </div>
  );
}

export default Information;
