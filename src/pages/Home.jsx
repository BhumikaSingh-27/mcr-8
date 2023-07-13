import React, { useContext } from "react";
import "./home.css";
import { DataContext } from "../context/DataContext";
import Card from "../components/card/Card";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { eventData, sortData, searchData } = useContext(DataContext);

  const searchedData = searchData
    ? eventData.filter(
        ({ eventType, eventStartTime, title }) =>
          eventType
            .toLowerCase()
            .toLowerCase()
            .includes(searchData.toLowerCase()) |
            title.toLowerCase().includes(searchData.toLowerCase()) ||
          eventStartTime.toLowerCase().includes(searchData.toLowerCase())
      )
    : [...eventData];

  const filteredData = sortData
    ? sortData === "All"
      ? [...eventData]
      : searchedData.filter((data) => data.eventType === sortData)
    : [...searchedData];

  return (
    <div className="home-cont">
      {filteredData.length !== 0 ? (
        filteredData.map((data) => (
          <NavLink className="not-a-link" to={`/${data.id}`}>
            <div>
              <Card data={data} />
            </div>
          </NavLink>
        ))
      ) : (
        <h2>No Event found! </h2>
      )}
    </div>
  );
};

export default Home;
