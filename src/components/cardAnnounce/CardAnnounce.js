import React from "react";
import "./CardAnnounce.css";

const CardAnnounce = (props) => {
  return (
    <div className="container  col-md-6  col-lg-3 mb-3  mt-5 d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="inner-card">
          {" "}
          <img src={props.image} className="card-img rounded" />
          <div className="d-flex justify-content-between align-items-center mt-3 px-2">
            <strong>{props.title}</strong>{" "}
          </div>
          <div className="px-2">
            <small>
              {props.price} - {props.city}
            </small>
          </div>
          <div className="px-2 mt-3">
            {" "}
            <button className="btn">{props.buttonText}</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAnnounce;
