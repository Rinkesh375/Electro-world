import { USER_ADD_TO_CART_DECREMENT,USER_ADD_TO_CART_INCREMENT ,USER_ADD_TO_CART,USER_ADD_TO_CART_LOADING,USER_ADD_TO_CART_ERROR} from "./actionTypes";

const initial = {
    userAddToCart:[],
    isLoading:false,
    isError:false
}

const userCartQuantityReducer = (state=initial,{type,payload})=>{
      
       switch (type) {
        case USER_ADD_TO_CART_INCREMENT: return {  userAddToCart:payload,isError:false,isLoading:false};
        case USER_ADD_TO_CART: return {...state, userAddToCart:payload,isError:false,isLoading:false};
        case USER_ADD_TO_CART_LOADING: return {...state,isLoading:true,isError:false};
        case USER_ADD_TO_CART_ERROR: return {...state,isLoading:false,isError:true};
        default: return {...state};
       }
}


export {userCartQuantityReducer};