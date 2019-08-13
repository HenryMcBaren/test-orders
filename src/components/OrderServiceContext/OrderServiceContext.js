import React from "react";

const {
  Provider: OrderServiceProvider,
  Consumer: OrderServiceConsumer
} = React.createContext();

export { OrderServiceConsumer, OrderServiceProvider };
