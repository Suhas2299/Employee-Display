// import React, { useEffect, useState } from "react";
import Favorites from "./Favorites";
import Spinner from "./Spinner";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Mark from "./Mark";
import Pagination from "./Pagination";
function EmployeeList({
  // deleteEmployee,
  // employeeData,
  // fetchMoreData,
  employees,
  setEmployees,
}) {
  //display data is used to show all the employees in the  employee list
  const [displayData, setDisplayData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [currentPosts , setCurrentPosts] = useState([])
  const [employeesDisplayed] = useState(10);

  // const data = employeeData;

  const fetchUpdatedData = async () => {
    // let url = process.env.URL_ENDPOINT;
    let url =
      "https://dev.ventriksapi1.com/openapi/getAllEmployees?&skip=0&limit=900";
    let data = await fetch(url);
    // let parsedData = await axios.get(url);
    let parsedData = await data.json();
    // console.log(parsedData.data.records);
    console.log(parsedData.data.records);
    //setting the state variable setDisplay data to the fetched data
    setDisplayData(parsedData.data.records);
  };

  useEffect(() => {
    fetchUpdatedData();
  }, []);

  const traverseData = (pageNo) => setCurrentPage(pageNo);
  console.log(currentPage);

  const indexOfLastPost = currentPage * employeesDisplayed;
  const indexOfFirstPost = indexOfLastPost - employeesDisplayed;
  const currentPosts = displayData.slice(indexOfFirstPost, indexOfLastPost);
  console.log("At current post", currentPosts);

  async function deleteEmployee(employeeid) {
    let url = `https://dev.ventriksapi1.com/openapi/deleteEmployee?_id=${employeeid}`;
    let data = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "noauth",
        "Content-Type": "application/json",
      },
    });
    let parsedData = await data.json();
    // setDisplayData(parsedData);
    //recall the function to get the updated list od employees after the deletion
    fetchUpdatedData();
    //need to set the employees to re render
    setEmployees([]);
    console.log(parsedData);
  }
  // console.log("display deleted data in the list ", displayData);
  return (
    <>
      <SearchBar displayData={displayData} />
      <table className=" table emp-table-display">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Role</th>
            <th>Remove</th>
            <th>Bookmark</th>
          </tr>
        </thead>
        {displayData.length === 0 && <Spinner />}
        {employees.length === 0
          ? currentPosts?.map((employee) => (
              <tbody>
                <tr key={employee._id}>
                  <td className="vw-10">{employee.name}</td>
                  <td>{employee.address}</td>
                  <td>{employee.age}</td>
                  <td>{employee.role}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        deleteEmployee(employee._id);
                        e.target.style.backgroundColor = "red";
                      }}
                      className="btn border border-gray-400 rounded shadow"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    {/* <button
                      onClick={(e) => {
                        Favorites(employee);
                        e.target.style.backgroundColor = "#FFFF00";
                      }}
                      style={{ borderRadius: "10px", backgroundColor: "white" }}
                    >
                      Bookmark
                    </button> */}
                    <Mark favemployees={employee} />
                  </td>
                </tr>
              </tbody>
            ))
          : employees?.map((element) => (
              <>
                <tbody>
                  <tr key={element._id}>
                    <td className="vw-10">{element.name}</td>
                    <td>{element.address}</td>
                    <td>{element.age}</td>
                    <td>{element.role}</td>
                    <td>
                      <button
                        onClick={(e) => {
                          deleteEmployee(element._id);
                          e.target.style.backgroundColor = "red";
                        }}
                        className="btn border border-gray-400 rounded shadow"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      {/* <button
                      onClick={(e) => {
                        Favorites(element);
                        e.target.style.backgroundColor = "#FFFF00";
                      }}
                      style={{ borderRadius: "10px", backgroundColor: "white" }}
                    >
                      Bookmark
                    </button> */}
                      <Mark favemployees={element} />
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
      </table>

      <Pagination
        employeesDisplayed={employeesDisplayed}
        employeescount={displayData.length}
        traverseData={traverseData}
      />
    </>
  );
}
export default EmployeeList;
