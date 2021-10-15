import {
    GET_PRODUCTS_TYPE_REQUEST,
    GET_PRODUCTS_TYPE_SUCCESS,
    GET_PRODUCTS_TYPE_FAIL,
  } from "../constants";
  
  export default function ProductsTypeReducer(state = {}, action) {
    switch (action.type) {
      case GET_PRODUCTS_TYPE_REQUEST:
        return {
          loading: true,
        };
      case GET_PRODUCTS_TYPE_SUCCESS:
        return {
          loading: false,
          ...state,
          productsType: action.payload,
        };
      case GET_PRODUCTS_TYPE_FAIL:
        return {
          loading: true,
        };
      default:
        return state;
    }
  }
  