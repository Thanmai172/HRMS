import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Mini HRMS</h1>
      <p>
        A simple Human Resource Management System where you can manage employees,
        track details, and explore their profiles.
      </p>
      <div className="home-buttons">
        <Link to="/employees">
          <button>Go to Employee List</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
