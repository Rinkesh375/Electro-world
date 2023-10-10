import { Grid, GridItem,Heading,Image,Divider, Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../redux/singleProductReducer/action';
import ProductDetails from '../components/SingleProductPageComponents/ProductDetails';
import LoadingSpinner from '../components/ProductPageComponents/LoadingSpinner';
import { useDispatch, useSelector } from 'react-redux';



const SingleProductPage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {singleProduct,isSingleProductLoading} = useSelector(store=>store.singleProductReducer);

  useEffect(()=>{
        dispatch(getSingleProduct(dispatch,id))
  },[])


  return (
    <>
     <Grid w="90%" m="2rem auto" templateColumns={isSingleProductLoading?"":"2fr 4fr"} gap={16}>
       {isSingleProductLoading?<Center><LoadingSpinner/></Center>:<>
       
       <GridItem>
        <Image src={singleProduct.image} alt={singleProduct.name}  />
       </GridItem>
       <GridItem>
        <Heading as='h5' size='sm'>{singleProduct?.name}</Heading>
        <ProductDetails/>
       </GridItem>
       
       </>}
      
     </Grid>
     <Divider borderColor="rgba(0,0,0,.702)"  my="1"        /> 
    </>
  );
}

export default SingleProductPage;
