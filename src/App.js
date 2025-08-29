import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import EmployeeDetail from "./pages/EmployeeDetail";
import Home from "./pages/Home";

function App() {
  const [employees, setEmployees] = useState([]); 

  return (
    <div className="app-container">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/employees">Employee List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/employees"
          element={<EmployeeList employees={employees} setEmployees={setEmployees} />}
        />
        <Route
          path="/employee/:id"
          element={<EmployeeDetail employees={employees} />}
        />
      </Routes>
    </div>
  );
}

export default App;
