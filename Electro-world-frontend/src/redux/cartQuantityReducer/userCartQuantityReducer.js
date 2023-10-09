import { USER_ADD_TO_CART_DECREMENT,USER_ADD_TO_CART_INCREMENT ,USER_ADD_TO_CART} from "./actionTypes";

const initial = {
    userAddToCart:[]
}

const userCartQuantityReducer = (state=initial,{type,payload})=>{
      
       switch (type) {
        case USER_ADD_TO_CART_INCREMENT: return {userAddToCart:payload};
        case USER_ADD_TO_CART: return {userAddToCart:payload};
        default: return {...state};
       }
}


export {userCartQuantityReducer};