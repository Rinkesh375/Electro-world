import { applyMiddleware,combineReducers,legacy_createStore } from "redux";
import productReducer from "./redux/productReducer/productReducer";
import { singleProductReducer } from "./redux/singleProductReducer/singleProductReducer";
import { userLoginReducer } from "./redux/userLoginReducer/userLoginReducer";
import { userCartQuantityReducer } from "./redux/cartQuantityReducer/userCartQuantityReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({productReducer,singleProductReducer,userLoginReducer,userCartQuantityReducer});
export const  store = legacy_createStore(rootReducer,applyMiddleware(thunk));


