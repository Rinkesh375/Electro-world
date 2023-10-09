import React from 'react'
import { Box, Button, Flex, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';


const Pagination = ({page,handleUpdatePage}) => {
  const {totalPages} = useSelector(store=>store.productReducer);
  return (
    <Flex justifyContent="space-evenly" m="1rem" >
    <IconButton colorScheme='purple' onClick={()=>handleUpdatePage(-1)} isDisabled={page === 1} icon={<ChevronLeftIcon />}aria-label="Previous page"/>
    <Button colorScheme='twitter' isDisabled={true}>{page}</Button>
    <IconButton colorScheme='purple' onClick={()=>handleUpdatePage(1)} isDisabled={totalPages === page} icon={<ChevronRightIcon />} aria-label="Next page"/>
  </Flex>
  )
}

export default Pagination
