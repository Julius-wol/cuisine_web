import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search for:", searchQuery);
    // Add search functionality here
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img
            src="/images/z7452383056397_d2e54e3118ea058fb8ecbfca6282a3ec.jpg"
            alt="Vietnamese Cuisine"
          />
        </a>
      </div>
      <div className="header-content">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search in website"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
