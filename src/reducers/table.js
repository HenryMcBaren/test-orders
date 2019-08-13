const table = (state, action) => {
  if (state === undefined) {
    return {
      orders: [],
      loading: true,
      error: null,
      editableOrder: null
    };
  }
  switch (action.type) {
    case "FETCH_ORDERS_REQUEST":
      return {
        ...state,
        orders: [],
        loading: true,
        error: null
      };
    case "FETCH_ORDERS_SUCCESS":
      return {
        ...state,
        orders: action.payload,
        loading: false,
        error: null
      };
    case "FETCH_ORDERS_FAILURE":
      return {
        ...state,
        orders: [],
        loading: false,
        error: action.payload
      };
    case "EDIT_ORDER_START":
      return {
        ...state,
        editableOrder: action.payload
      };
    case "EDIT_ORDER_CANCEL":
      return {
        ...state,
        editableOrder: null
      };
    case "EDIT_ORDER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "EDIT_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        editableOrder: null
      };

    case "EDIT_ORDER_FAILURE":
      return {
        ...state,
        editableOrder: null,
        error: action.payload
      };
    case "ADD_ORDER_REQUESTED":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "ADD_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null
      };
    case "ADD_ORDER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default table;
