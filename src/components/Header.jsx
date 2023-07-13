import React, { useContext } from "react";
import "./style.css";
import { DataContext } from "../context/DataContext";

const Header = () => {
  const { searchData, setSearchData } = useContext(DataContext);

  return (
    <div className="nav-header">
      <div>
        <h1>Meetup</h1>
      </div>
      <div>
        <input
          value={searchData}
          type="text"
          placeholder="search by title"
          onChange={(e) => setSearchData(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
