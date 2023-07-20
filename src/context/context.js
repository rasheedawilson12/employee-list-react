// import createContext
import { useState, createContext } from "react";
import employeeList from "../models/employees";

// Createing the context that we are going to use
export const AppContext = createContext();

const AppContextProvider = (props) => {
  // Sets the User State
  const [employee, setEmployee] = useState(employeeList);
  const [current, setCurrent] = useState(employeeList[0]);
  return (
    <AppContext.Provider
      value={{
        // first use state
        employee,
        setEmployee,

        // second use state
        current,
        setCurrent,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

// Export out function output
export default AppContextProvider;
