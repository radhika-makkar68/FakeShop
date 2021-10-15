import axios from "axios";
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_TYPE_REQUEST,
  GET_PRODUCTS_TYPE_SUCCESS,
  GET_PRODUCTS_TYPE_FAIL
} from "../constants";

export const GetProductsType=()=>async(dispatch)=>{
  dispatch({ type: GET_PRODUCTS_TYPE_REQUEST });
  try {
    let response = await axios.get("https://fakestoreapi.com/products/categories");
    dispatch({ type: GET_PRODUCTS_TYPE_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_TYPE_FAIL, payload: err.message });
  }
}

export const GetProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  try {
    let response = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: err.message });
  }
};
