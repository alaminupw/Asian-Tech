import React from "react";
import { Link } from "react-router-dom";


const CategoryCard = ({ title, image }) => {
  return (
    <div className="col">
      <div className="border border-2 p-3 text-center Category-electronics">
        <Link to="/" className="text-decoration-none text-reset">
          <img src={image} alt={title} className="w-50" />
          <p className="mb-0 mt-2 catagory-text">{title}</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;