import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faPhoneVolume,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import CardHeroSlides from "./CardHeroSlide";
import "./HeroSliderCom.css";

// ইমপোর্ট পাথ তোমার প্রজেক্ট অনুযায়ী অ্যাডজাস্ট করো
import { searchItems } from "../NavbarCom/SearchData.js";

const HeroSliderCom = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);

  const navigate = useNavigate();
  const searchRef = useRef(null);

  // ড্রপডাউন বাইরে ক্লিক করলে বন্ধ
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setFilteredItems([]);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // মূল সার্চ + ক্যাটাগরি ফিল্টার লজিক (সেফগার্ড সহ)
  useEffect(() => {
    if (!searchTerm?.trim()) {
      setFilteredItems([]);
      return;
    }

    // searchItems যদি অ্যারে না হয় বা খালি থাকে
    if (!Array.isArray(searchItems) || searchItems.length === 0) {
      console.warn("searchItems is empty or not an array");
      setFilteredItems([]);
      return;
    }

    const term = searchTerm.toLowerCase();

    const results = searchItems.filter((item) => {
      // name / title / productName যেকোনো একটা থাকলেই চলবে
      const nameValue =
        (item?.name ||
          item?.title ||
          item?.productName ||
          item?.ProductName ||
          "")
          .toString()
          .toLowerCase();

      const nameMatch = nameValue.includes(term);

      if (selectedCategory === "all") {
        return nameMatch;
      }

      // category ম্যাচ চেক (সেফ)
      const categoryMatch = (item?.category || "") === selectedCategory;

      return nameMatch && categoryMatch;
    });

    setFilteredItems(results);
  }, [searchTerm, selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <section className="Main-Slide">
      <div className="clip-wrapper-all">
        <div className="clip-three"></div>
        <div className="clip-two"></div>
      </div>

      <div className="container-fluid">
        {/* সার্চ বার */}
        <div className="hero-search-wrapper" ref={searchRef}>
          <div className="hero-search">
            <input
              type="text"
              placeholder="Search product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              className="all-items-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="all">All Categories</option>
              <option value="electronics">ELECTRONICS ITEMS</option>
              <option value="networking">NETWORKING ITEMS</option>
              <option value="firesafety">FIRE SAFETY ITEMS</option>
            </select>

            <button type="button">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>

            {/* ড্রপডাউন */}
            {filteredItems.length > 0 && (
              <div className="search-dropdown">
                {filteredItems.map((item) => (
                  <div
                    key={item.id || Math.random()} // id না থাকলে ক্র্যাশ এড়ানো
                    className="search-item"
                    onClick={() => {
                      if (item.path) {
                        navigate(item.path);
                      }
                      setSearchTerm("");
                      setFilteredItems([]);
                    }}
                  >
                    {item.image && (
                      <img src={item.image} alt={item.name || "product"} />
                    )}
                    <div className="search-item-info">
                      <p>{item.name || item.title || "No name"}</p>
                      <span>${item.price || "N/A"}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* স্লাইডার অংশ (আগের মতোই) */}
        <div className="row align-items-center">
          <div className="col-12 col-lg-4">
            <div className="OverlayContainer-slide">
              <p className="Subtitle">
                {CardHeroSlides?.[currentSlideIndex]?.badge || ""}
              </p>
              <h1 className="Title">
                {CardHeroSlides?.[currentSlideIndex]?.title || ""}
              </h1>
              <p className="Title-Description">
                {CardHeroSlides?.[currentSlideIndex]?.description || ""}
              </p>
              <p className="Price">
                {CardHeroSlides?.[currentSlideIndex]?.price || ""}
              </p>

              <div className="Shop-button">
                <Link to="/shop" className="Shop-now">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span>Shop now</span>
                </Link>

                <Link to="/contact" className="Contact-button">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                  <span>+880 1521 100326</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-8 position-relative">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2500 }}
              pagination={{ clickable: true }}
              loop
              onSlideChange={(swiper) => setCurrentSlideIndex(swiper.realIndex)}
              className="hero-swiper"
            >
              {CardHeroSlides?.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <img
                    src={slide.images?.big}
                    alt={slide.title || "slide"}
                    className="hero-big-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="clip-wrapper">
              <div className="clip-one">
                <img
                  src={CardHeroSlides?.[currentSlideIndex]?.images?.small}
                  alt="small"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSliderCom;