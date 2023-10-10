import { SEARCH_PRODUCT_INPUT_TEXT } from "./actionTypes";
import { SEARCH_PRODUCT_LOADING } from "./actionTypes";
import { SEARCH_PRODUCT_SUCCESS } from "./actionTypes";
import { SEARCH_PRODUCT_ERROR } from "./actionTypes";



const initialState = {
    isLoading: false,
    isError: false,
    productArray: [],
    searchText: "",
    totalPages: 1

}

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEARCH_PRODUCT_LOADING: return { ...state, isLoading: true,isError:false };
        case SEARCH_PRODUCT_ERROR: return { ...state, isLoading: false,isError:true };
        case SEARCH_PRODUCT_SUCCESS: return { ...state, isLoading: false,productArray:[...payload.product],totalPages:payload.totalPages};
        case SEARCH_PRODUCT_INPUT_TEXT: return { ...state, isLoading: false,searchText:payload };
        default: return { ...state };
    }

}

export default productReducer


