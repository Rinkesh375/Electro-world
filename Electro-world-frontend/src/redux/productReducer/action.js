import { SEARCH_PRODUCT_ERROR, SEARCH_PRODUCT_LOADING, SEARCH_PRODUCT_SUCCESS, SEARCH_PRODUCT_INPUT_TEXT } from "./actionTypes"
import axios from "axios";
import url from "../../url";

const getProduct = (dispatch, obj) => async () => {
  
    
    dispatch({ type: SEARCH_PRODUCT_LOADING })
    try {
        const res = await axios.get(`${url}/products`, obj)
       
     dispatch({ type: SEARCH_PRODUCT_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: SEARCH_PRODUCT_ERROR })
    }

}

export { getProduct }




