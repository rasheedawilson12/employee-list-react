import "./App.css";
import employees from "./models/employees";
import Homepage from "./components/Homepage";
import EmployeePage from "./components/EmployeePage";

function App() {
  return (
    <div className="App">
      <Homepage employees={employees} />
      <EmployeePage employees={employees} />
    </div>
  );
}

export default App;
