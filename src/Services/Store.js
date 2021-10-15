import {createStore,compose,applyMiddleware} from "redux";

import RootReducer from "../Services/Reducers/index";
import thunk from "redux-thunk";

const initialState={
    products:[],
    productsType:["All"]
}

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

const Store=createStore(
    RootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default Store;