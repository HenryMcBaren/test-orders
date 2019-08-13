const ordersLoaded = orders => {
  return {
    type: "FETCH_ORDERS_SUCCESS",
    payload: orders
  };
};
const ordersRequested = () => {
  return {
    type: "FETCH_ORDERS_REQUEST"
  };
};
const ordersError = err => {
  return {
    type: "FETCH_ORDERS_FAILURE",
    payload: err
  };
};
const fetchOrders = (orderService, dispatch) => () => {
  dispatch(ordersRequested());
  orderService
    .getOrders()
    .then(data => dispatch(ordersLoaded(data)))
    .catch(err => dispatch(ordersError(err)));
};

export default fetchOrders;
