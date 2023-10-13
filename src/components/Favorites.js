import { useState } from "react";
let bookmarked = [];
const Favorites = (employeeToBookmark, employeeData) => {
  //   console.log(employeeToBookmark);
  //   console.log(employeeData);
  // const [bookmarkedEmployees, setBookmarkedEmployees] = useState([]);

  bookmarked.push(employeeToBookmark);
  console.log("bookmarked employeedata", bookmarked);

  //   const bookmarkEmployee = (employeeToBookmark) => {
  //   employeeData.map((employee) => {
  //     if (employee._id === employeeId) {
  //       const datatomark = employee;
  //     }
  //   });
  //   console.log("At Employee list", employeeToBookmark, employeeToBookmark._id);
  //   const data = bookmarkedEmployees.map((employee1) => {

  // setBookmarkedEmployees(employeeData._id);
  // console.log("employee to be added", bookmarkedEmployees);
  //     if (!employee1._id === employeeToBookmark._id) {
  //   setBookmarkedEmployees([...bookmarkedEmployees, employeeToBookmark]);
  //   console.log("Bookmarked Employees", bookmarkedEmployees);
  //   }
  //   }
  //   );
  //   console.log(data);
  //   if (!data) {
  //     // setBookmarkedEmployees.
  //     console.log("at compare bookmarkemployee", employee._id);
  //     setBookmarkedEmployees([...bookmarkedEmployees, employeeToBookmark]);
  //     console.log("at applist bookmarked list", bookmarkedEmployees);
  //   }
  //   };
  return (
    <>
      <h3>Bookmarked Employees</h3>
      {bookmarked.length === 0 ? (
        <p>No bookmarks</p>
      ) : (
        bookmarked?.map((employee) => (
          // <li key={employee?._id}>
          <tbody>
            <tr>
              <td>
                <span>{employee?.name}</span>
              </td>
              {/* <td>
                <span>{employee?.address}</span>
              </td>
              <td>
                <span>{employee?.age}</span>
              </td>
              <td>
                <span>{employee?.role}</span>
              </td> */}
            </tr>
          </tbody>
          // </li>
        ))
      )}
    </>
  );
};

export default Favorites;
