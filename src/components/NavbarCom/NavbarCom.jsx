import './NavbarCom.css';
import logo2 from '../../assets/images/logo2.png'; 
import { Link } from "react-router-dom";
import { useState } from "react";
import jacket1 from '../../assets/images/jacket1.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import SearchModal from "./SearchModal.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      {/* ===== Top Navbar ===== */}
      <div className="Full-Nav-left d-flex align-items-center">
        
        <div className="logo-area">
          <Link to="/" className="navbar-brand">
            <img src={logo2} alt="logo" className="mainlogo" />
          </Link>
        </div>

        <div className="Full-Nav-right d-flex justify-content-end flex-grow-1">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid nav-flex">
              <div className="nav-right d-flex align-items-center">

                {/* Hamburger - Mobile Only */}
                <button 
                  className="hamburger-btn d-lg-none"
                  onClick={() => setOpen(!open)}
                >
                  ☰ Menu
                </button>

                {/* Overlay */}
                {open && <div className="menu-overlay" onClick={() => setOpen(false)} />}

                {/* Side Drawer */}
                <div className={`side-menu ${open ? "open" : ""}`}>
                  <div className="menu-header">
                    <span>Menu</span>
                    <button className="close-btn" onClick={() => setOpen(false)}>×</button>
                  </div>
                  <ul className="menu-list">
                    <li><img src={jacket1} alt="Puffer"/> Puffer Jackets</li>
                    <li><img src={jacket1} alt="Puffer"/> Down Jackets</li>
                    <li><img src={jacket1} alt="Puffer"/> Winter Parkas</li>
                    <li><img src={jacket1} alt="Puffer"/> Windbreakers</li>
                    <li><img src={jacket1} alt="Puffer"/> Crew Jackets</li>
                    <li><img src={jacket1} alt="Puffer"/> Winter Gilets</li>
                    <li><img src={jacket1} alt="Puffer"/> Down Jackets</li>
                  </ul>
                </div>

                {/* Desktop Nav Links */}
                <ul className="nav nav-underline justify-content-end d-none d-lg-flex">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">HOME</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">ABOUT US</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">OUR PROJECT</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">OUR SERVICE</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav-product" to="/About">PRODUCT</Link>
                  </li>

                  {/* Icons */}
                  <li className="nav-item nav-item-icon">
                    <button 
                      className="nav-link nav-link-icon"
                      onClick={() => setOpenSearch(true)}
                    >
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </li>

                  <SearchModal 
                    open={openSearch} 
                    onClose={() => setOpenSearch(false)} 
                  />

                  <li className="nav-item nav-item-icon">
                    <Link to="/cart" className="nav-link nav-link-icon">
                      <FontAwesomeIcon icon={faCartShopping} />
                    </Link>
                  </li>

                  <li className="nav-item nav-item-icon">
                    <Link to="/cart" className="nav-link nav-link-icon">
                      <FontAwesomeIcon icon={faHeart} />
                    </Link>
                  </li>

                  <li className="nav-item nav-item-icon whatsapp-hover">
                    <Link 
                      to="/cart" 
                      className="nav-link nav-link-icon d-flex flex-column align-items-center"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                      <span className="whatsapp-text">01917901088</span>
                    </Link>
                  </li>
                </ul>

              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* ===== Mobile Bottom Row ===== */}
      <ul className="mobile-bottom-nav d-lg-none">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/Scholarship">ABOUT US</Link></li>
        <li><Link to="/Preparation"> OUR PROJECT</Link></li>
        <li><Link to="/Blog">OUR SERVICE</Link></li>
      </ul>

    </>
  );
};

export default Navbar;
