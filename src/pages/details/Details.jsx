import React, { useContext } from "react";
import "./details.css";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import Time from "../../components/speaker/Time";
import Speaker from "../../components/speaker/Speaker";

const Details = () => {
  const { eventData, setIsModal, id } = useContext(DataContext);

  const { eventId } = useParams();
  const data = eventData.find((data) => data.id.toString() === eventId);

  return (
    <div className="details-container">
      <div className="info">
        <h1>{data?.title}</h1>
        <span>hosted by:</span>
        <h4>{data?.hostedBy}</h4>
        <img src={data.eventThumbnail} alt="" />
        <h2>Details:</h2>
        <p>{data?.eventDescription}</p>
        <h2>Additional Information:</h2>
        <p>
          <b>DressCode:</b> {data?.additionalInformation?.dressCode}
        </p>
        <p>
          <b>Age restrition:</b> {data?.additionalInformation?.ageRestrictions}
        </p>

        <h2>Event type:</h2>
        <div>
          {data?.eventTags.map((ele) => (
            <button>{ele}</button>
          ))}
        </div>
      </div>
      <div>
        <Time data={data} />
        <h2>Speakers:({data?.speakers.length})</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          {data?.speakers.map((data) => (
            <Speaker data={data} />
          ))}
        </div>
        <button
          onClick={() => {
            id.current = data.id;
            setIsModal(true);
          }}
        >
          RSVP
        </button>
      </div>
    </div>
  );
};

export default Details;
