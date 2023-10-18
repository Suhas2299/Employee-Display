import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../context/UserContext";

function Mark({ favemployees }) {
  // const [employees, setEmployees] = useState([]);
  // const {
  //     employeeData,
  //     setEmployeeData,
  //     searchResults,
  //     setSearchResults,
  //   } = useContext(MyContext);

  //   console.log(favemployees);
  //if useState used then everytime the button clicked the Mark component triggered and value will be reset to empty
  //   const [favorites, setFavorites] = useState([]);
  const { favorites, setFavorites } = useContext(MyContext);

  useEffect(() => {
    // Load favorites from local storage when the component mounts
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  useEffect(() => {
    // Save favorites to local storage whenever it changes
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (employee) => {
    const isFavorite = favorites?.some((fav) => fav._id === employee._id);
    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (fav) => fav._id !== employee._id
      );
      setFavorites(updatedFavorites);
    } else {
      setFavorites([...favorites, employee]);
    }
  };

  return (
    <div>
      {/* <h1>Employee List</h1> */}

      {
        // {employeeData.map((employee) => (
        <span key={favemployees._id}>
          {/* {favemployees?.name} */}
          <button
            onClick={() => toggleFavorite(favemployees)}
            style={{ borderRadius: "10px", backgroundColor: "white" }}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            {favorites?.some((fav) => fav._id === favemployees._id)
              ? "unbookmark"
              : "bookmark"}
          </button>
        </span>
        // ))
      }

      {/* <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite?._id}>
            {favorite?.name}
            <button onClick={() => toggleFavorite(favorite)}>
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Mark;
