import React, { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../context/UserContext";

// { searchEmployee }
function SearchBar() {
  const {
    employeeData,
    setEmployeeData,
    searchResults,
    setSearchResults,
  } = useContext(MyContext);

  let value = "search";
  const [searchTerm, setSearchTerm] = useState("");

  const searchEmployee = (name) => {
    console.log("search name in appjs search employee", name);
    const results = employeeData.filter((employee) =>
      employee.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log("search results in appjs search employee", results);
    setSearchResults(results ? results : "No Results Found");
  };

  const handleSearch = () => {
    searchEmployee(searchTerm);
    setSearchTerm("");
    value = "Reset";
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
        {value}
      </button>
    </div>
  );
}

export default SearchBar;
