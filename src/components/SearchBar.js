import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { MyContext } from "../context/UserContext";

// { searchEmployee }
function SearchBar({ displayData }) {
  const {
    employeeData,
    setEmployeeData,
    searchResults,
    setSearchResults,
  } = useContext(MyContext);

  let value = "search";
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("search name in appjs search employee", searchTerm);
    const results = displayData.filter((employee) =>
      employee.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    console.log("search results in appjs search employee", results);
    setSearchResults(results ? results : "No Results Found");
  }, [searchTerm]);

  // const searchEmployee = (name) => {
  //   console.log("search name in appjs search employee", name);
  //   const results = displayData.filter((employee) =>
  //     employee.name.toLowerCase().includes(name.toLowerCase())
  //   );
  //   console.log("search results in appjs search employee", results);
  //   setSearchResults(results ? results : "No Results Found");
  // };

  // const handleSearch = () => {
  //   console.log("in search bar", displayData);
  //   searchEmployee(searchTerm);
  //   setSearchTerm("");
  //   value = "Reset";
  // };

  return (
    <div className="search-bars">
      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="formInput"
      />
      {/* <button onClick={handleSearch} className="search-btn">
        {value}
      </button> */}
    </div>
  );
}

export default SearchBar;
