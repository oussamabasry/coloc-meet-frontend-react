import React from "react";
import "./Spinner.css";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer spinner-parent">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
