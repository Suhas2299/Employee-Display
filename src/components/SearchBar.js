import React, { useState } from "react";

function SearchBar({ searchEmployee }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    searchEmployee(searchTerm);
  };

  return (
    <div className="search-bars">
      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="formInput"
      />
      <button onClick={handleSearch} className="search-btn">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
