import React from "react";

const Pagination = ({ employeescount, traverseData, employeesDisplayed }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(employeescount / employeesDisplayed); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <div key={number} className="pagination-child">
            <button onClick={() => traverseData(number)}>{number}</button>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
