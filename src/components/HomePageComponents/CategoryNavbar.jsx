import { Box, Flex, HStack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import React from 'react';

const CategoryNavbar = () => {
  return (
      <Flex bg="#e42529" justifyContent="space-between" padding="0.5rem 1.2rem" color="white">
         <NavLink >Mobile</NavLink>
         <NavLink >Laptop</NavLink>
         <NavLink >Television</NavLink>
         <NavLink >Headphone & Headset</NavLink>
         <NavLink >Air Conditioner</NavLink>
      </Flex>
  );
}

export default CategoryNavbar;
