import { Grid, GridItem } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartProductCard from './CartProductCard';
import { updateAddCartProduct,getAddToCart } from '../../redux/cartQuantityReducer/action';

const CartProduct = () => {
    const {userAddToCart} = useSelector(store=>store.userCartQuantityReducer);
    const dispatch = useDispatch();
    const removeAddToCartProduct = (id)=>{
          let temp = [...userAddToCart];
          temp  = temp.filter(ele=>ele.id !== id )
          dispatch(updateAddCartProduct(dispatch,temp))
        
}

const quantityUpdateHandler = (id,value)=>{
    let temp = [...userAddToCart];
    temp = temp.map(ele=>ele.id === id?{...ele,qty:ele.qty+value}:ele)
    dispatch(updateAddCartProduct(dispatch,temp))

}

useEffect(()=>{
    dispatch(getAddToCart(dispatch))
},[])

  return (
    <>
      <Grid templateColumns="3fr 1fr" >
        <GridItem>
         
                {userAddToCart.map(ele=><  CartProductCard key={ele.id} {...ele} removeAddToCartProduct={removeAddToCartProduct} quantityUpdateHandler={quantityUpdateHandler}  />)}
          
        </GridItem>
        <GridItem></GridItem>
      </Grid>
    </>
  );
}

export default CartProduct;
