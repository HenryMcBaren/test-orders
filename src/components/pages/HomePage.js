import React from "react";
import { withRouter } from "react-router-dom";
import "./HomePage.css";

const HomePage = ({ history }) => {
  return (
    <div className="home-page">
      <h3>Lorem ipsum...</h3>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => history.push("/orders")}
      >
        Start
      </button>
    </div>
  );
};

export default withRouter(HomePage);
