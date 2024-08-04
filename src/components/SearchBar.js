import React from "react";
import "./SearchBar.css"; // Import the CSS file

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search tasks..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
