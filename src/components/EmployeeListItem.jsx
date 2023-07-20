import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/context";

function EmployeeListItem(props) {
  let { setCurrent } = useContext(AppContext);

  return (
    <div
      className="EmployeeListItem"
      onClick={() => {
        setCurrent(props.employee);
      }}
    >
      <img src={props.employee.img} alt="" className="EmployeeImg" />
      <div className="EmployeeInfo">
        <h3>{props.employee.person}</h3>
        <p>{props.employee.title}</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;
