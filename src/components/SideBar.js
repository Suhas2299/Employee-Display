import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link className="navbar-brand" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="navbar-brand" to="/employeeList">
                Employee List
              </Link>
            </li>
            <li class="nav-item">
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
