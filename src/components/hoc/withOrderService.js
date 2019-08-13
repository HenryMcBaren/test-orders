import React from "react";
import { OrderServiceConsumer } from "../OrderServiceContext";

const withOrderService = () => Wrapped => {
  return props => {
    return (
      <OrderServiceConsumer>
        {orderService => {
          return <Wrapped {...props} orderService={orderService} />;
        }}
      </OrderServiceConsumer>
    );
  };
};

export default withOrderService;
