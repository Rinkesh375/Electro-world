import { GridItem, Heading, Stack, Text, Box, Center, Image, HStack,Card,CardBody,VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ _id, name, offer_price, actual_price, image }) => {
    return (
        <GridItem style={{ padding: "0.2rem 1rem", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "0.4rem" }}>
        <Link to={`/${_id}`} >

            <Center>
                <Image src={image} alt={name} />
            </Center>
            <HStack w={{base:"100px",md:"250px",lg:"310px"}} style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}><Heading textAlign="left" as='h6' size='xs' fontWeight="bold" color="#003380" style={{
                    display: "inline-block",
                    whiteSpace: "nowrap", overflow: "hidden",
                    textOverflow: "ellipsis"
                }} >{name.substring(0, 62)}...</Heading></HStack>

            <Box m="1rem auto" style={{ fontSize: "0.8rem" }}>
                <Text style={{ fontWeight: "bold" }}>Offer Price: <Box as="span"></Box>{` ₹ ${offer_price}`}</Text>
                <Text>M.R.P: <Box as="span" style={{ textDecoration: "line-through", color: "#666" }}>{`₹ ${actual_price}`}</Box></Text>
                <Text style={{ color: "#666" }}>You Save: <Box as="span">{`${Math.floor(100 - (offer_price * 100) / actual_price)}% (₹ ${actual_price - offer_price})`}</Box></Text>
                <Box as="span" style={{ fontSize: "0.6rem", color: "rgb(49, 129, 46)", border: "1px solid rgb(49, 129, 46)", padding: "0rem 0.4rem", borderRadius: "1rem" }}>OFFERS AVAILABLE</Box>
            </Box>
    </Link>
        </GridItem>
    );
}

export default ProductCard;
