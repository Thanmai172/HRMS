// src/components/EmployeeForm.jsx
import React, { useState, useEffect } from "react";

function EmployeeForm({ onSubmit, initialData, onCancel }) {
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    department: "",
    role: "",
    dateOfJoining: "",
    status: "Active",
    photo: "", // ⬅️ new
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, photo: reader.result }); // base64 preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.name || !form.email) {
      alert("Employee ID, Name and Email are required");
      return;
    }
    onSubmit({ ...form, id: Number(form.id) });

    // reset
    setForm({
      id: "",
      name: "",
      email: "",
      department: "",
      role: "",
      dateOfJoining: "",
      status: "Active",
      photo: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      {/* Photo Upload */}
      <div style={{ textAlign: "center", width: "100%" }}>
        {form.photo ? (
          <img
            src={form.photo}
            alt="avatar"
            className="avatar-preview"
            onClick={() => document.getElementById("photoUpload").click()}
          />
        ) : (
          <span
            className="avatar-icon"
            onClick={() => document.getElementById("photoUpload").click()}
          >
            👤
          </span>
        )}
        <input
          id="photoUpload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handlePhotoChange}
        />
      </div>

      <input
        name="id"
        placeholder="Employee ID"
        value={form.id}
        onChange={handleChange}
      />
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
      />
      <input
        name="role"
        placeholder="Role"
        value={form.role}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dateOfJoining"
        value={form.dateOfJoining}
        onChange={handleChange}
      />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <button type="submit">Save</button>
      {onCancel && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default EmployeeForm;
