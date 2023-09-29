import { SEARCH_PRODUCT_ERROR,SEARCH_PRODUCT_LOADING,SEARCH_PRODUCT_SUCCESS,SEARCH_PRODUCT_INPUT_TEXT } from "./actionTypes"
import axios from "axios";
import url from "../../url";

const getProduct = (dispatch,obj)=> async()=>{
    dispatch({type:SEARCH_PRODUCT_LOADING})
try {
    const req = await axios.get(url,obj)
    dispatch({type:SEARCH_PRODUCT_SUCCESS,payload:req.data})
} catch (error) {
    dispatch({type:SEARCH_PRODUCT_ERROR})
}

}

export {getProduct}