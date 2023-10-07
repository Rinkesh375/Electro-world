import axios from "axios";
import url from "../../url";
import { USER_ADD_TO_CART, USER_ADD_TO_CART_INCREMENT } from "./actionTypes";


const getAddToCart =  (dispatch)=>async()=>{

     try {
        const id = JSON.parse(localStorage.getItem("userDetail")).email
        const res = await axios.get(`${url}/users/${id}`)
  
        dispatch({type:USER_ADD_TO_CART,payload:res.data.addToCart})
     } catch (error) {
        
     }
 

}


const  addNewCartProduct =(dispatch,addToCart)=> async()=>{
    try {
   
        const id = JSON.parse(localStorage.getItem("userDetail")).email
        await axios.patch(`${url}/users/${id}`,{addToCart})
        dispatch({type:USER_ADD_TO_CART_INCREMENT,payload:addToCart})
    } catch (error) {
        
    } 

}

export {getAddToCart,addNewCartProduct}