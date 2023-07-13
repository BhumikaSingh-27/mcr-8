import React from "react";
import "./speaker.css";

const Speaker = ({ data }) => {
  return (
    <div className="sp-container">
      <img src={data.image} alt="" />
      <h3>{data?.name}</h3>
      <span>{data.designation}</span>
    </div>
  );
};

export default Speaker;
