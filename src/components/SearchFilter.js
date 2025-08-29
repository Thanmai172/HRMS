// src/components/SearchFilter.jsx
import React from "react";
import "../App.css";

function SearchFilter({ search, setSearch, filter, setFilter }) {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className={`filter-dropdown ${filter.toLowerCase() || "all"}`}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All Departments</option>
        <option value="Engineering">Engineering</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
         <option value="softwareDeveloper">Software Developer</option>
          <option value="IT Team">IT Team</option>

      </select>
    </div>
  );
}

export default SearchFilter;

