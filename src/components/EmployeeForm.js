// import React, { useState } from "react";

// function EmployeeForm() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [address, setAddress] = useState("");
//   const [role, setRole] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newEmployee = { name, age, address, role };
//     createEmp(newEmployee);
//     setName("");
//     setAge("");
//     setAddress("");
//     setRole("");
//   };
//   let data;
//   const createEmp = async (newEmployee) => {
//     let url = `https://dev.ventriksapi1.com/openapi/createEmployee`;
//     data = await fetch(url, {
//       method: "POST",
//       headers: {
//         Authorization: "noauth",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newEmployee),
//     });
//     console.log("Employee Created", data.ok);
//   };

//   return (
//     <div>
//       {/* <h2>Create New Employee</h2> */}
//       {/* {{ data.ok } && <p>Employee Created</p>} */}
//       <form onSubmit={handleSubmit}>
//         <div className="">
//           <div>
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="formInput"
//             />
//           </div>
//           <div>
//             <input
//               type="number"
//               placeholder="Age"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               className="formInput"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Enter Role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="formInput"
//             />
//           </div>
//           {/* <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div> */}
//           <div>
//             <input
//               type="text"
//               placeholder="Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="formInput"
//             />
//           </div>
//           <button type="submit" className="add-button">
//             Add Employee
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default EmployeeForm;

import React, { useState } from "react";

function EmployeeForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { name, age, address, role };
    createEmp(newEmployee);
    setName("");
    setAge("");
    setAddress("");
    setRole("");
  };
  let data;
  const createEmp = async (newEmployee) => {
    let url = `https://dev.ventriksapi1.com/openapi/createEmployee`;
    data = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "noauth",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    });
    console.log("Employee Created", data.ok);
  };

  return (
    <div>
      <div style={{ marginTop: "6vw", marginLeft: "36vw", width: "800px" }}>
        <form
          // className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4" style={{ width: "400px" }}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "540px", height: "46px" }}
            />
          </div>
          <div class="mb-6" style={{ width: "400px" }}>
            <input
              type="number"
              placeholder="Enter Your Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              style={{ width: "540px", height: "46px" }}
            />
          </div>
          <div class="mb-4" style={{ width: "400px" }}>
            <input
              type="text"
              placeholder="Enter Your Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              style={{ width: "540px", height: "46px" }}
            />
          </div>
          <div class="mb-4" style={{ width: "400px" }}>
            <input
              type="text"
              placeholder="Enter Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              style={{ width: "540px", height: "46px" }}
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Employee
            </button>
          </div>
        </form>
        <p
          class=" text-gray-500 text-xs"
          style={{ marginTop: "140px", marginLeft: "-290px" }}
        >
          &copy;2020 Ventriks Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default EmployeeForm;
