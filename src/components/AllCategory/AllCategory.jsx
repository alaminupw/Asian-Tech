import React from "react";
import "./AllCategory.css";
import CategoryCard from "../Data/CategoryCard";
import { electronicsData, networkingData, firesafetyData } from "../Data/AllCategoryData";

const AllCategory = () => {
  return (
    <div className="AllCategory">

      {/* Electronics Section */}
      <div className="container-fluid mt-2">
        <h2 className="fs-5 fw-bold">ELECTRONICS ITEMS</h2>
        <p className="pt-0 mt-0 mb-0 d-flex align-items-center">
          {/* Left Colored Bold Line */}
          <span className="border-bottom border-2 border-primary electro-under"></span>
          {/* Remaining Normal Line */}
          <span className="flex-grow-1 border-bottom border border-1"></span>
        </p>
      </div>

      <div className="container-fluid">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 g-2 g-md-4 pt-2 pb-2">
          {electronicsData.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* Networking Section */}
      <div className="container-fluid mt-5">
        <h2 className="fs-5 fw-bold">NETWORKING ITEMS</h2>
        <p className="pt-0 mt-0 mb-0 d-flex align-items-center">
            {/* Left Colored Bold Line */}
            <span className="border-bottom border-2 border-primary electro-under"></span>
            {/* Remaining Normal Line */}
            <span className="flex-grow-1 border-bottom border border-1"></span>
        </p>
      </div>

      <div className="container-fluid">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 g-2 g-md-4 pt-2 pb-2">
          {networkingData.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      </div>

            {/* Fire Sefty Section */}
      <div className="container-fluid mt-5">
        <h2 className="fs-5 fw-bold">FIRE SAFETY ITEMS</h2>
        <p className="pt-0 mt-0 mb-0 d-flex align-items-center">
            {/* Left Colored Bold Line */}
            <span className="border-bottom border-2 border-primary electro-under"></span>
            {/* Remaining Normal Line */}
            <span className="flex-grow-1 border-bottom border border-1"></span>
        </p>
      </div>

      <div className="container-fluid">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 g-2 g-md-4 pt-2 pb-2">
          {firesafetyData.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategory;