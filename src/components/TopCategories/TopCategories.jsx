import React from "react";
import "./TopCategories.css";
import mobile from '../../../src/assets/images/mobile.png';
import computer from '../../../src/assets/images/computer.png';
import Networking from '../../../src/assets/images/Networking.png';
import digitaldevice from '../../../src/assets/images/digitaldevice.png';
import digitaldevice1 from '../../../src/assets/images/digitaldevice1.png';
import photocopy1 from '../../../src/assets/images/photocopy1.png';
import { Link } from 'react-router-dom';


const TopCategories = () => {
    return(
        <div className="Categories pt-3 pb-3">
            <div className="container-fluid Top-Categories">
                <div className="row text-center categories-item g-2 g-lg-4">
                    <h2 className="text-center fs-6">
                        <span>Explore Top Categories</span> <br/>
                        <span className="text-primary">________</span>
                    </h2>
                    <div className="col-6 col-lg-2">
                        <div className="border bg-white text-dark rounded-1 p-3 category-card">  {/* ← inner div */}
                            <Link to="/" className="text-decoration-none text-reset">
                                <img src={mobile} className="img-fluid rounded-1 pt-3 cat-img" alt="Category 1" />  {/* pt-3 সরিয়ে দিলাম, দরকার হলে inner-এ দাও */}
                                <p className="mb-0 mt-2 cat-text">New Category</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-lg-2">
                        <div className="border bg-white text-dark rounded-1 p-3 category-card">  {/* ← inner div */}
                            <Link to="/" className="text-decoration-none text-reset">
                                <img src={computer} className="img-fluid rounded-1 pt-3 cat-img" alt="Category 1" />  {/* pt-3 সরিয়ে দিলাম, দরকার হলে inner-এ দাও */}
                                <p className="mb-0 mt-2 cat-text">New Category</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-lg-2">
                        <div className="border bg-white text-dark rounded-1 p-3 category-card">  {/* ← inner div */}
                            <Link to="/" className="text-decoration-none text-reset">
                                <img src={Networking} className="img-fluid rounded-1 pt-3 cat-img" alt="Category 1" />  {/* pt-3 সরিয়ে দিলাম, দরকার হলে inner-এ দাও */}
                                <p className="mb-0 mt-2 cat-text">New Category</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-lg-2">
                        <div className="border bg-white text-dark rounded-1 p-3 category-card">  {/* ← inner div */}
                            <Link to="/" className="text-decoration-none text-reset">
                                <img src={digitaldevice} className="img-fluid rounded-1 pt-3 cat-img" alt="Category 1" />  {/* pt-3 সরিয়ে দিলাম, দরকার হলে inner-এ দাও */}
                                <p className="mb-0 mt-2 cat-text">New Category</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-lg-2">
                        <div className="border bg-white text-dark rounded-1 p-3 category-card">  {/* ← inner div */}
                            <Link to="/" className="text-decoration-none text-reset">
                                <img src={digitaldevice1} className="img-fluid rounded-1 pt-3 cat-img" alt="Category 1" />  {/* pt-3 সরিয়ে দিলাম, দরকার হলে inner-এ দাও */}
                                <p className="mb-0 mt-2 cat-text">New Category</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-lg-2">
                        <div className="border bg-white text-dark rounded-1 p-3 category-card">  {/* ← inner div */}
                            <Link to="/" className="text-decoration-none text-reset">
                                <img src={photocopy1} className="img-fluid rounded-1 pt-3 cat-img" alt="Category 1" />  {/* pt-3 সরিয়ে দিলাম, দরকার হলে inner-এ দাও */}
                                <p className="mb-0 mt-2 cat-text">New Category</p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TopCategories;