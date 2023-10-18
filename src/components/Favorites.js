// import { useState } from "react";
// let bookmarked = [];
// const Favorites = (employeeToBookmark) => {
//   //   console.log(employeeToBookmark);
//   //   console.log(employeeData);
//   // const [bookmarkedEmployees, setBookmarkedEmployees] = useState([]);
//   bookmarked.map((element) => {
//     if (element._id === employeeToBookmark._id) {
//       return;
//     } else {
//       bookmarked.push(employeeToBookmark);
//     }
//   });
//   bookmarked.push(employeeToBookmark);
//   console.log("bookmarked employeedata", bookmarked);

//   //   const bookmarkEmployee = (employeeToBookmark) => {
//   //   employeeData.map((employee) => {
//   //     if (employee._id === employeeId) {
//   //       const datatomark = employee;
//   //     }
//   //   });
//   //   console.log("At Employee list", employeeToBookmark, employeeToBookmark._id);
//   //   const data = bookmarkedEmployees.map((employee1) => {

//   // setBookmarkedEmployees(employeeData._id);
//   // console.log("employee to be added", bookmarkedEmployees);
//   //     if (!employee1._id === employeeToBookmark._id) {
//   //   setBookmarkedEmployees([...bookmarkedEmployees, employeeToBookmark]);
//   //   console.log("Bookmarked Employees", bookmarkedEmployees);
//   //   }
//   //   }
//   //   );
//   //   console.log(data);
//   //   if (!data) {
//   //     // setBookmarkedEmployees.
//   //     console.log("at compare bookmarkemployee", employee._id);
//   //     setBookmarkedEmployees([...bookmarkedEmployees, employeeToBookmark]);
//   //     console.log("at applist bookmarked list", bookmarkedEmployees);
//   //   }
//   //   };
//   return (
//     <>
//       <h3 style={{ marginLeft: "-1050px", marginTop: "20px" }}>
//         Bookmarked Employees
//       </h3>
//       {bookmarked.length === 0 ? (
//         <p>No bookmarks</p>
//       ) : (
//         bookmarked?.map((employee) => (
//           // <li key={employee?._id}>
//           <tbody key={employee?._id}>
//             <tr>
//               <td>
//                 <span style={{ fontFamily: "cursive" }}>{employee?.name}</span>
//               </td>
//               {/* <td>
//                 <span>{employee?.address}</span>
//               </td>
//               <td>
//                 <span>{employee?.age}</span>
//               </td>
//               <td>
//                 <span>{employee?.role}</span>
//               </td> */}
//             </tr>
//           </tbody>
//           // </li>
//         ))
//       )}
//     </>
//   );
// };

// export default Favorites;

// import { MyContext } from "../context/UserContext";
// import { useContext } from "react";

const Favorites = (employeeToBookmark) => {
  // const { favorites, setFavorites } = useContext(MyContext);
  const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
  if (storedFavorites) {
    console.log("at stored favorites", storedFavorites);
  }
  return (
    <>
      <h4>BookMarks</h4>
      <table className=" table emp-table-display">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Role</th>
          </tr>
        </thead>
        {storedFavorites?.map((element) => {
          return (
            <>
              <tbody>
                <tr key={element._id}>
                  <td>{element.name}</td>
                  <td>{element.address}</td>
                  <td>{element.age}</td>
                  <td>{element.role}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Favorites;
