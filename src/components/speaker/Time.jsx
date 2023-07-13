import React from "react";

const Time = ({ data }) => {
  return (
    <div className="event-time">
      <div>
        <div>{data?.eventStartTime}</div>
        <div>{data?.eventEndTime}</div>
      </div>
      <div>{data?.location}</div>
      <div>{data?.price}</div>
    </div>
  );
};

export default Time;
