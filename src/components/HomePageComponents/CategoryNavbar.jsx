import { Box, Flex, HStack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import React from 'react';

const links = [
  {text:"Mobile",category:"mobile"},
  {text:"Laptop",category:"laptop"},
  {text:"Television",category:"television"},
  {text:"Headphone & Headset",category:"earphone"},
  {text:"Air Conditioner",category:"air_conditioner"}
]

const CategoryNavbar = () => {
  return (
      <Flex bg="#e42529" justifyContent="space-between" padding="0.5rem 1.2rem" color="white">
        {
          links.map(ele=><NavLink to={`/category/${ele.category}`} style={({isActive})=>isActive?{color:"blue"}:{color:"white"}} key={ele.text}>{ele.text}</NavLink>)
        }
         {/* <NavLink >Mobile</NavLink>
         <NavLink >Laptop</NavLink>
         <NavLink >Television</NavLink>
         <NavLink >Headphone & Headset</NavLink>
         <NavLink >Air Conditioner</NavLink> */}
      </Flex>
  );
}

export default CategoryNavbar;
