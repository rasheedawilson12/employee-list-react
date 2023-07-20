import React from "react";
import EmployeeListItem from "./EmployeeListItem";
import { useContext } from "react";
import { AppContext } from "../context/context";

function EmployeeList(props) {
  let { employee } = useContext(AppContext);

  return (
    <div className="EmployeeList">
      {employee.map((worker) => {
        return <EmployeeListItem employee={worker} />;
      })}
    </div>
  );
}

export default EmployeeList;
