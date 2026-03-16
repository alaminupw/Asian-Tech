import React from "react";
import'./AllCategory.css';
import photocopy1 from '../../assets/images/photocopy1.png';
import digitaldevice1 from '../../assets/images/digitaldevice1.png';
import  Networking from '../../assets/images/Networking.png';

import { Link } from "react-router-dom";

const AllCategory = () =>{
    return (
        <div className="AllCategory">
            <div className="container-fluid mt-2">
                <h2 className="fs-5 fw-bold pt-0 mt-0 mb-0">
                    Electronics Items
                </h2>
                <p className="pt-0 mt-0 mb-0 d-flex align-items-center">
                    {/* Left Colored Bold Line */}
                    <span className="border-bottom border-2 border-primary electro-under"></span>
                    {/* Remaining Normal Line */}
                    <span className="flex-grow-1 border-bottom border border-1"></span>
                </p>
            </div>
            <div className="container-fluid">
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 g-2 g-md-4 pt-2 pb-2">
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none text-reset">
                            <img src={photocopy1} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={digitaldevice1} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={Networking} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={digitaldevice1} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={photocopy1} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={Networking} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={Networking} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={photocopy1} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={digitaldevice1} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={Networking} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={photocopy1} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={digitaldevice1} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
            <div className="container-fluid mt-5">
                <h2 className="fs-5 fw-bold pt-0 mt-0 mb-0">
                    Networking Items
                </h2>
                <p className="pt-0 mt-0 mb-0 d-flex align-items-center">
                    {/* Left Colored Bold Line */}
                    <span className="border-bottom border-2 border-primary electro-under"></span>
                    {/* Remaining Normal Line */}
                    <span className="flex-grow-1 border-bottom border border-1"></span>
                </p>
            </div>
            <div className="container-fluid">
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 g-2 g-md-4 pt-2 pb-2">
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={Networking} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={digitaldevice1} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={photocopy1} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={Networking} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={photocopy1} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={Networking} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={photocopy1} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={Networking} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={photocopy1} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={digitaldevice1} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={Networking} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="border border-2 p-3 text-center Category-electronics">
                        <Link to="/" className="text-decoration-none">
                            <img src={photocopy1} alt="" className="w-50"></img>
                            <p className="mb-0 mt-2 catagory-text">New Category</p>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default AllCategory;