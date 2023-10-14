// import React, { useEffect, useState } from "react";
import Favorites from "./Favorites";
import Spinner from "./Spinner";
function EmployeeList({
  deleteEmployee,
  employeeData,
  fetchMoreData,
  employees,
}) {
  // const [displayData, setDisplayData] = useState([]);
  const data = employeeData;
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
    fetchMoreData();
    console.log(parsedData);
  }
  // console.log("display deleted data in the list ", displayData);
  return (
    <div>
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
        {employeeData.length === 0 && <Spinner />}
        {employees.length === 0
          ? employeeData?.map((employee) => (
              <tbody>
                <tr key={employee._id}>
                  <td>{employee.name}</td>
                  <td>{employee.address}</td>
                  <td>{employee.age}</td>
                  <td>{employee.role}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        deleteEmployee(employee._id);
                        e.target.style.backgroundColor = "red";
                      }}
                      className="btn"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => {
                        Favorites(employee);
                        e.target.style.backgroundColor = "#FFFF00";
                      }}
                      style={{ borderRadius: "10px", backgroundColor: "white" }}
                    >
                      Bookmark
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          : employees?.map((element) => (
              <>
                <tr key={element._id}>
                  <td>{element.name}</td>
                  <td>{element.address}</td>
                  <td>{element.age}</td>
                  <td>{element.role}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        deleteEmployee(element._id);
                        e.target.style.backgroundColor = "red";
                      }}
                      className="btn"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => {
                        Favorites(element);
                        e.target.style.backgroundColor = "#FFFF00";
                      }}
                      style={{ borderRadius: "10px", backgroundColor: "white" }}
                    >
                      Bookmark
                    </button>
                  </td>
                </tr>
              </>
            ))}
      </table>
    </div>
  );
}
export default EmployeeList;
