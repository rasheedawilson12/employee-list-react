// import the useContext to the be able to use it and import AppContext
import React, { useContext } from "react";
import Header from "./Header";
import Employee from "./Employee";
import { AppContext } from "../context/context";

function EmployeePage() {
  // pulling employee state from AppContext
  let { employee } = useContext(AppContext);

  return (
    <div className="EmployeePage">
      <Header text={"Employee"} />
      <Employee employees={employee} />
    </div>
  );
}

export default EmployeePage;
