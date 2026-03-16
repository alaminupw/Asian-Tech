import { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchModal.css";
import { searchItems } from "./SearchData1.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";




const SearchModal = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  if (!open) return null;

  const filteredItems = searchItems.filter(item => {
  const matchText = item.name.toLowerCase().includes(query.toLowerCase());
  const matchCategory =
    category === "all" || item.category === category;

  return matchText && matchCategory;
});


  return (
    <>
        <div className="search-overlay" onClick={onClose}></div>
            <div className="search-modal">
                    {/* Close */}
                    <button className="search-close" onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>

                    {/* Search Input */}
                    <div className="search-input-box">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input
                        type="text"
                        placeholder="Write something..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <select
                        className="all-items-select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        >
                        <option value="all">All Categories</option>
                        <option value="cctv">CCTV</option>
                        <option value="network">Networking</option>
                        <option value="security">Security</option>
                        <option value="software">Software</option>
                    </select>

                    </div>

                    {/* Result Info */}
                    <div className="search-info">
                        <span>{filteredItems.length} Result Found</span>
                        <Link to="/search">View All</Link>
                    </div>

                    {/* Result List */}
                <div className="search-results">
                    {filteredItems.map(item => (
                        <Link
                        to={item.path}
                        key={item.id}
                        className="search-item"
                        onClick={onClose}
                        >
                        <img src={item.image} alt={item.name} />
                        <div className="search-item-info">
                            <h4>{item.name}</h4>
                            <p>${item.price}</p>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
    </>
  );
};

export default SearchModal;
