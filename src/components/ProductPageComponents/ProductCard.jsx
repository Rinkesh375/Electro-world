import { GridItem, Heading, Stack, Text, Box, Center, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({id, name, offer_price, actual_price, image }) => {
    return (
        <Link to={`/${id}`}>
           
            <GridItem  style={{ padding: "0.2rem 1rem", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "0.4rem" }}>
                <Center>
                    <Image src={image} alt={name} />
                </Center>
                <Heading textAlign="left" as='h6' size='xs' fontWeight="bold" color="#003380" >{name.substring(0,62)}...</Heading>
                <Box m="1rem auto" style={{ fontSize: "0.8rem" }}>
                    <Text style={{ fontWeight: "bold" }}>Offer Price: <Box as="span"></Box>{` ₹ ${offer_price}`}</Text>
                    <Text>M.R.P: <Box as="span" style={{ textDecoration: "line-through", color: "#666" }}>{`₹ ${actual_price}`}</Box></Text>
                    <Text style={{ color: "#666" }}>You Save: <Box as="span">{`${Math.floor(100 - (offer_price * 100) / actual_price)}% (₹ ${actual_price - offer_price})`}</Box></Text>
                    <Box as="span" style={{ fontSize: "0.6rem", color: "rgb(49, 129, 46)", border: "1px solid rgb(49, 129, 46)", padding: "0rem 0.4rem", borderRadius: "1rem" }}>OFFERS AVAILABLE</Box>
                </Box>
            </GridItem>
        </Link>
    );
}

export default ProductCard;
