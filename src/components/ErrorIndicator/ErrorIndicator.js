import React from "react";
import img from "./error-image.png";
import "./ErrorIndicator.css";

const ErrorIndicator = ({ err }) => {
  const errInfo = () => {
    if (err) {
      return <span className="err-info">{err}</span>;
    }
  };
  return (
    <div className="error-indicator">
      {errInfo()}
      <img src={img} alt="error" />
      <span>Something is wrong!</span>
      <span>We will fix it soon</span>
    </div>
  );
};

export default ErrorIndicator;
