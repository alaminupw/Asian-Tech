import React from "react";
import "./FooterArea.css";
import { FaFacebookF, FaInstagram, FaPinterestP, FaXTwitter } from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";

const FooterArea = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">

          {/* Logo Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h2 className="footer-logo">ASIAN-TECH</h2>

            <p className="footer-text">
              Asian® was founded on the belief that wellness is more than just
              a necessity—it's a powerful expression of self-care and vitality.
            </p>

            <div className="footer-social">
              <span><FaXTwitter size={20}/></span>
              <span><FaInstagram size={20}/></span>
              <span><FaFacebookF size={20}/></span>
              <span><FaPinterestP size={20}/></span>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="footer-title">Useful Links</h4>
            <ul className="footer-links">
              <li>Product</li>
              <li>Our Services</li>
              <li>Our Project</li>
              <li>Career</li>
              
            </ul>
          </div>

          {/* Information */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="footer-title">Information</h4>
            <ul className="footer-links">
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

            {/* Delivery & Returns */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="footer-title">Delivery & Returns</h4>
            <ul className="footer-links">
              <li>Order tracking</li>
              <li>Delivery</li>
              <li>E-Receipts</li>
              <li>Returns</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="footer-title">Payment Methods</h4>
            <div className="footer-social">
              <span><RiVisaLine size={30}/></span>
              <span><FaCcMastercard size={30}/></span>
              <span><FaCcPaypal size={30}/></span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterArea;