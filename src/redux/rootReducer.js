import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import cardReducer from "./cart/cartReducer";
const rootReducer = combineReducers ({
    productsState : productsReducer ,
    cartState : cardReducer

})
export  default rootReducer