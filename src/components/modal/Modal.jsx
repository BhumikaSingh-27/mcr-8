import React, { useContext } from "react";
import "./modal.css";
import { DataContext } from "../../context/DataContext";

const Modal = ({eid}) => {
    const { setIsModal } = useContext(DataContext);
  return (
    <div className="modal-container">
      <div className="modal-form">
        <h3>Complete your RSVP</h3>
        <p>Fill your information</p>
        <label htmlFor="">Name:</label>
        <input type="text" />
        <label htmlFor="">Email:</label>
        <input type="text" />

        <span>*You have to make the payment at the venue.</span>
        <button onClick={()=>{
            setIsModal(false)
        }}>RSVP</button>
      </div>
    </div>
  );
};

export default Modal;
