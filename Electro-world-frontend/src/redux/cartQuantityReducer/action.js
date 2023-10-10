import axios from "axios";
import url from "../../url";
import { USER_ADD_TO_CART, USER_ADD_TO_CART_INCREMENT, USER_ADD_TO_CART_ERROR, USER_ADD_TO_CART_LOADING } from "./actionTypes";


const getAddToCart = (dispatch) => async () => {
    dispatch({ type: USER_ADD_TO_CART_LOADING });

    try {
        const id = JSON.parse(localStorage.getItem("userDetail"))._id;
        const res = await axios.get(`${url}/users/addToCart/${id}`);
        dispatch({ type: USER_ADD_TO_CART, payload: res.data });
    } catch (error) {
        dispatch({ type: USER_ADD_TO_CART_ERROR });
    }



}


const addNewCartProduct = (dispatch, addToCart) => async () => {
    dispatch({ type: USER_ADD_TO_CART_LOADING });
    try {

        const id = JSON.parse(localStorage.getItem("userDetail"))._id;
        await axios.patch(`${url}/users/addToCart/${id}`, addToCart);
        dispatch({ type: USER_ADD_TO_CART_INCREMENT, payload: addToCart });
    } catch (error) {
        dispatch({ type: USER_ADD_TO_CART_ERROR });
    }

}


const updateAddCartProduct = (dispatch, addToCart) => async () => {
    
    try {
        const id = JSON.parse(localStorage.getItem("userDetail"))._id;
        await axios.patch(`${url}/users/addToCart/${id}`, addToCart);
        dispatch({ type: USER_ADD_TO_CART, payload: addToCart });
    } catch (error) {
        dispatch({ type: USER_ADD_TO_CART_ERROR });
    }
}



export { getAddToCart, addNewCartProduct, updateAddCartProduct }