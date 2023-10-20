import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(location);
      setLocation("");
    }
  }

  return (
    <div className="search">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter the location"
        type="text"
      />
    </div>
  );
}

export default SearchBar;
