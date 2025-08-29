// src/components/EmployeeTable.jsx
import React from "react";
import { Link } from "react-router-dom";

function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "100%" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Photo</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Role</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>
              {emp.photo ? (
                <img src={emp.photo} alt="avatar" className="avatar-small" />
              ) : (
                <span className="avatar-icon">👤</span>
              )}
            </td>
            <td><Link to={`/employee/${emp.id}`}>{emp.name}</Link></td>
            <td>{emp.email}</td>
            <td>{emp.department}</td>
            <td>{emp.role}</td>
            <td>{emp.status}</td>
            <td>
              <button onClick={() => onEdit(emp)}>Edit</button>
              <button onClick={() => onDelete(emp.id)} style={{ marginLeft: "10px", color: "white" }}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
