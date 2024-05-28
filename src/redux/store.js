import { createStore ,applyMiddleware } from "redux";
// import { createStoreHook } from "react-redux";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";

const store = createStore (rootReducer , applyMiddleware(thunk))

export default store
 
