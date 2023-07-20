import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/context";

function Employee() {
  let { current } = useContext(AppContext);

  return (
    <div className="Employee">
      <div className="currentEmployee">
        <img src={current.img} alt="" className="currentEmployeeImg" />
        <div className="currentEmployeeInfo">
          <h3 className="currentEmployeeName">{current.person}</h3>
          <h4 className="currentEmployeeTitle">{current.title}</h4>
        </div>
      </div>
      <div className="officePhone">
        Office Phone <br />
        {current.officePhone}
      </div>
      <div className="mobilePhone">
        Mobile Phone <br />
        {current.mobilePhone}
      </div>
      <div className="smsPhone">
        SMS <br />
        {current.smsPhone}
      </div>
      <div className="email">
        Email
        <br />
        {current.email}
      </div>
    </div>
  );
}

export default Employee;
