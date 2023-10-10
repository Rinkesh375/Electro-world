import { Grid, GridItem,Center,Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartProductCard from './CartProductCard';
import { updateAddCartProduct, getAddToCart } from '../../redux/cartQuantityReducer/action';
import LoadingSpinner from '../ProductPageComponents/LoadingSpinner';

const CartProduct = () => {
  const { userAddToCart, isLoading } = useSelector(store => store.userCartQuantityReducer);
  const dispatch = useDispatch();
  const removeAddToCartProduct = (id) => {
    let temp = [...userAddToCart];
    temp = temp.filter(ele => ele._id !== id)
    dispatch(updateAddCartProduct(dispatch, temp))

  }

  const quantityUpdateHandler = (id, value) => {
    let temp = [...userAddToCart];
    temp = temp.map(ele => ele._id === id ? { ...ele, qty: ele.qty + value } : ele)
    dispatch(updateAddCartProduct(dispatch, temp))

  }

  useEffect(() => {
    dispatch(getAddToCart(dispatch))
  }, [])

  return (
    <>
      <Grid style={{width:"80%",margin:"auto"}}>
        {
          isLoading ? <Center><LoadingSpinner /></Center> :userAddToCart.length? <>
            <GridItem>

              {userAddToCart.map(ele => <  CartProductCard key={ele._id} {...ele} removeAddToCartProduct={removeAddToCartProduct} quantityUpdateHandler={quantityUpdateHandler} />)}

            </GridItem>
          
          </>:<Heading textAlign="center" m="1rem">Your cart is empty!</Heading>
        }

      </Grid>
    </>
  );
}

export default CartProduct;
