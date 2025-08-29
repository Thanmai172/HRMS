import React, { useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeForm from "../components/EmployeeForm";
import SearchFilter from "../components/SearchFilter";

function EmployeeList({ employees, setEmployees }) {
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const handleAddOrUpdate = (emp) => {
    if (editing) {
      setEmployees(employees.map((e) => (e.id === emp.id ? emp : e)));
      setEditing(null);
    } else {
      setEmployees([...employees, emp]);
    }
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((e) => e.id !== id));
  };

  const handleEdit = (emp) => {
    setEditing(emp);     
    setShowForm(true);   
  };

  const filtered = employees.filter((e) => {
    return (
      (e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.email.toLowerCase().includes(search.toLowerCase())) &&
      (filter ? e.department === filter : true)
    );
  });

  return (
    <div>
      <h2>Employee List</h2>
      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />

      {!showForm && (
        <button onClick={() => setShowForm(true)}> Add Employee</button>
      )}

      {showForm && (
        <EmployeeForm
          onSubmit={handleAddOrUpdate}
          initialData={editing}   
          onCancel={() => {
            setEditing(null);
            setShowForm(false);
          }}
        />
      )}

      <EmployeeTable employees={filtered} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default EmployeeList;

