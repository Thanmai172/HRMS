import React from "react";
import { useParams, Link } from "react-router-dom";


function EmployeeDetail({ employees }) {
const { id } = useParams();
const emp = employees.find((e) => e.id === Number(id));


if (!emp) return <p>Employee not found</p>;


return (
<div>
<h2>Employee Detail</h2>
<p><strong>Name:</strong> {emp.name}</p>
<p><strong>Email:</strong> {emp.email}</p>
<p><strong>Department:</strong> {emp.department}</p>
<p><strong>Role:</strong> {emp.role}</p>
<p><strong>Date of Joining:</strong> {emp.dateOfJoining}</p>
<p><strong>Status:</strong> {emp.status}</p>
<Link to="/employees">Back to list</Link>
</div>
);
}


export default EmployeeDetail;