import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/*container-fluid*/}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <div className=" collapse navbar-collapse" id="navbarNav"> */}

          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/*   className="nav-link"*/}
              <Link className="navbar-brand" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/employeeList">
                Employee List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/favorites">
                Bookmarked Employees
              </Link>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
}

export default Sidebar;
