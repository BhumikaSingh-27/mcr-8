import React from "react";
import "./card.css";

const Card = ({ data }) => {
  const { title, eventThumbnail, eventStartTime, eventType } = data;
  return (
    <div className="card-container">
      <div className="img-div">
        <img id="image" src={eventThumbnail} alt="event" />
      </div>
      <span>{eventType}</span>
      <span>{eventStartTime.toString()}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
