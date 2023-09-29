import { applyMiddleware,combineReducers,legacy_createStore } from "redux";
import productReducer from "./redux/productReducer/productReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({productReducer});
export const  store = legacy_createStore(rootReducer,applyMiddleware(thunk));


