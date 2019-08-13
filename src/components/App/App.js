import React from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import { HomePage, TablePage, FormPage } from "../pages";

const App = () => {
    return (
      <div className="app">
        <Navbar />
        <div className="router">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/orders" component={TablePage}/>
            <Route path="/new-order" component={FormPage}/>
          </Switch>
        </div>
      </div>
    );
  
}

export default App;
