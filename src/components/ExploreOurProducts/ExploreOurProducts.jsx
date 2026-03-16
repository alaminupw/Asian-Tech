import React from "react";
import "./ExploreOurProducts.css";

const ExploreOurProducts = () => {
  return (
    <div className="container my-5">
      <div className="section-wrapper position-relative rounded-3 p-4 p-md-5">

        {/* Red Circle Icon */}
        <div className="icon-wrapper d-flex align-items-center justify-content-center">
          <span className="text-white fs-4">👁</span>
        </div>

        {/* Title */}
        <h6 className="fw-bold mb-0 text-center display-5 display-md-4 display-lg-3 fs-2 fs-md-1 fs-lg-2">
          Explore <span className="text-danger">Asian Tech</span> Company’s Products at a Glance
        </h6>

      </div>
    </div>
  );
};

export default ExploreOurProducts;