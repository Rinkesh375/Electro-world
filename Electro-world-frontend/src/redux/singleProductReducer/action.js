import axios from "axios";
import url from "../../url";
import { SINGLE_PRODUCT_SUCCESS,SINGLE_PRODUCT_LOADING,SINGLE_PRODUCT_ERROR } from "./actionTypes";
const getSingleProduct = (dispatch,id)=> async() =>{
      dispatch({type:SINGLE_PRODUCT_LOADING})
    try {
        const res = await axios.get(`${url}/products/${id}`);
         dispatch({type:SINGLE_PRODUCT_SUCCESS,payload:res.data})
    
    }
    catch (error) {
          dispatch({type:SINGLE_PRODUCT_ERROR})
    }

}

export { getSingleProduct}