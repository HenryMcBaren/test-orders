const editStarted = orderId => {
  return {
    type: "EDIT_ORDER_START",
    payload: orderId
  };
};
const editCanceled = () => {
  return {
    type: "EDIT_ORDER_CANCEL"
  };
};
const editRequested = () => {
  return {
    type: "EDIT_ORDER_REQUEST"
  };
};
const editSuccessfully = () => {
  return {
    type: "EDIT_ORDER_SUCCESS"
  };
};

const editFailed = err => {
  return {
    type: "EDIT_ORDER_FAILURE",
    payload: err
  };
};

const editOrder = (data, orderId, orderService, dispatch) => {
  dispatch(editRequested());
  orderService
    .patchOrder(data, orderId)
    .then(() => dispatch(editSuccessfully()))
    .catch(err => dispatch(editFailed(err)));
};

export { editOrder, editCanceled, editStarted };
