import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from "../constants";

export default function ProductsReducer(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS_FAIL:
      return {
        loading: true,
      };
    default:
      return state;
  }
}
