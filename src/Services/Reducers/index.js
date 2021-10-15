import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import ProductsTypeReducer from "./ProductsTypeReducer";

export default combineReducers({
  ProductsReducer,
  ProductsTypeReducer
});
