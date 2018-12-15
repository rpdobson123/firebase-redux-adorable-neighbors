import authReducer from "./authReducer";
import neighborReducer from "./neighborReducer";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  neighbor: neighborReducer,
  firestore: firestoreReducer
});

export default rootReducer;
