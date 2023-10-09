import { SINGLE_PRODUCT_SUCCESS,SINGLE_PRODUCT_LOADING,SINGLE_PRODUCT_ERROR } from "./actionTypes";
const initial =  {
    singleProduct:{
        name:"",
        offer_price:0,
        actual_price:0,
        key_features:[],
        category:"",
        brand:"",
        image:"",
        url:""
      
      },
      isSingleProductLoading:false,
      isSingleProductError:false
}


const singleProductReducer = (state=initial,{type,payload})=>{

    switch (type) {
        case SINGLE_PRODUCT_LOADING: return {...state,isSingleProductLoading:true,isSingleProductError:false};
        case SINGLE_PRODUCT_ERROR: return {...state,isSingleProductLoading:false,isSingleProductError:true};
        case SINGLE_PRODUCT_SUCCESS: return {singleProduct:payload,isSingleProductLoading:false,isSingleProductError:false};
        default : return {...state};
            
    
    
    }


}

export {singleProductReducer}