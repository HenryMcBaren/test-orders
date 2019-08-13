import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundry from "./components/ErrorBoundry";
import { OrderServiceProvider } from "./components/OrderServiceContext";
import { OrderService } from "./services";
import store from "./store";

const orderService = new OrderService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <OrderServiceProvider value={orderService}>
        <Router>
          <App />
        </Router>
      </OrderServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
