import { Button, Grid, GridItem,Heading,Image,Text,Box, HStack, Center } from '@chakra-ui/react';
import React from 'react';

const CartProductCard = ({_id,name,offer_price,actual_price,image,qty,removeAddToCartProduct,quantityUpdateHandler}) => {
  return (
    <Grid  templateColumns='1fr 3fr 1fr' gap={2} style={{ boxShadow: " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px", padding: "1rem", borderRadius: "0.4rem",margin:"1rem" }}>
      <GridItem>
        <Image src={image} alt={name}/>
        <Center>
        <Button colorScheme='red' isDisabled={qty === 1} onClick={()=>quantityUpdateHandler(_id,-1)}>-</Button>
        <Box as="span">{qty}</Box>
        <Button colorScheme='red' onClick={()=>quantityUpdateHandler(_id,1)}>+</Button>
        </Center>
      </GridItem>
      <GridItem mt="2rem">
        <Heading as='h6' size='xs'>{name}</Heading>
        <Button mt="1rem" colorScheme='red' onClick={()=>removeAddToCartProduct(_id)}>Remove</Button>
      </GridItem>
      <GridItem mt="2rem">
        <HStack><Box as="span">Offer Price:</Box><Heading as='h4' size='md'>₹ {offer_price}</Heading></HStack>
        <HStack> <Text>MRP:&nbsp;<Box as="span" textDecoration="line-through" fontSize="1rem"> ₹{actual_price}</Box><Box as="span" fontSize="1rem">&nbsp;(Inclusive of all taxes)</Box></Text></HStack>
        <Text style={{ color: " rgb(67, 160, 71)" }}>You Save: {Math.floor(100 - ((offer_price * 100) / actual_price))}%(₹{actual_price - offer_price})</Text>
        <Text style={{ color: " rgb(67, 160, 71)" }}>Free Shipping</Text>
      </GridItem>
    </Grid>
  );
}

export default CartProductCard;
