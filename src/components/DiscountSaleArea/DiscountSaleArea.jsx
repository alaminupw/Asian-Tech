import React from "react";
import './DiscountSaleArea.css';
import discount1 from '../../assets/images/discount1.png';
import { Link } from "react-router-dom";

const DiscountSaleArea = () => {
    return (
        <div className="sale-banner-area py-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                        <div className="sale-banner-thumb w-100">
                            <Link to="/">
                                <img 
                                    src={discount1} 
                                    alt="Sale Banner" 
                                    className="img-fluid rounded-3"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default DiscountSaleArea;