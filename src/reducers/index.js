import table from "./table";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const reducer = combineReducers({
  table,
  form: formReducer
});

export default reducer;
