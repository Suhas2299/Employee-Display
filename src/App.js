import React, { useState, useEffect } from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Favorites from "./components/Favorites";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// import MarkList from "./components/MarkList";
function App() {
  const [employees, setEmployees] = useState([]);
  // const [bookmarkedEmployees, setBookmarkedEmployees] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  let [employeeData, setEmployeeData] = useState([]);

  const fetchMoreData = async () => {
    let url = `https://dev.ventriksapi1.com/openapi/getAllEmployees?&skip=0&limit=900`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.data.records);
    setEmployeeData(parsedData.data.records);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  const deleteEmployee = (employeeId) => {
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== employeeId
    );
    setEmployees(updatedEmployees);
  };

  const searchEmployee = (name) => {
    console.log("search name in appjs search employee", name);
    const results = employeeData.filter((employee) =>
      employee.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log("search results in appjs search employee", results);
    setSearchResults(results);
  };

  return (
    <div className="App">
      <Router>
        <Sidebar />

        <Header />
        <Switch>
          <Route exact path="/">
            <EmployeeForm />
          </Route>
          <Route exact path="/employeeList">
            <SearchBar searchEmployee={searchEmployee} />
            <EmployeeList
              employeeData={employeeData}
              employees={searchResults.length ? searchResults : employees}
              deleteEmployee={deleteEmployee}
              fetchMoreData={fetchMoreData}
              // bookmarkEmployee={bookmarkEmployee}
            />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
