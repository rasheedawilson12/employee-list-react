import React from "react";
import Header from "./Header";
import Search from "./Search";
import EmployeeList from "./EmployeeList";

function Homepage(props) {
  return (
    <div className="Homepage">
      <Header text={"Employee Directory"} />
      <Search />
      <EmployeeList employees={props.employees} />
    </div>
  );
}

export default Homepage;
