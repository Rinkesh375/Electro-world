import React, {  useState } from 'react'
import { shallowEqual, useSelector} from 'react-redux';
import { Box, Grid, GridItem,Heading } from '@chakra-ui/react';
import ProductCard from '../components/ProductPageComponents/ProductCard';
import Pagination from '../components/ProductPageComponents/Pagination';
import SideBarFilter from '../components/ProductPageComponents/SideBarFilter';
import LoadingSpinner from '../components/ProductPageComponents/LoadingSpinner';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const {isLoading, productArray } = useSelector(store => store.productReducer,shallowEqual);

  const [page, setPage] = useState(1)
  const handleUpdatePage = (value) => {
    setPage(pre => pre + value)
  }


  return (
        <>
        

<Grid templateColumns='1fr 4fr' style={{overflow:"hidden"}}>
      <GridItem> <SideBarFilter page={page} /></GridItem>
        {isLoading?<LoadingSpinner/>: productArray.length?<>
      <GridItem> <Grid templateColumns={{xl:"repeat(3,1fr)","2xl":"repeat(4,1fr)"}}  gap="1rem" m="2rem 1rem">

        {
          productArray.map(ele => <ProductCard key={ele._id} {...ele} />)
        }

      </Grid></GridItem>

      </>:<Heading mt="1rem" textAlign="center" as='h2' size='xl'>No Product Found</Heading>} 


    </Grid>
    <Pagination page={page} handleUpdatePage={handleUpdatePage} />
        </>
  )
}

export default ProductPage