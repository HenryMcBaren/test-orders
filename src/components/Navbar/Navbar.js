import React from "react";
import { NavTab, RoutedTabs } from "react-router-tabs";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <RoutedTabs tabClassName="nav-tab" activeTabClassName="nav-tab active">
        <NavTab exact to="/">
          Start
        </NavTab>
        <NavTab to="/orders">Orders</NavTab>
        <NavTab to="/new-order">New Order</NavTab>
      </RoutedTabs>
      <div className="account">
        <span>Мой аккаунт</span>
        <span>Выйти</span>
      </div>
    </div>
  );
};

export default Navbar;
