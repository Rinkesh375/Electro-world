import { Grid, GridItem, HStack, Text, VStack, Stack, Box, UnorderedList, ListItem, Heading, Button, useToast ,Spinner} from '@chakra-ui/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addNewCartProduct } from '../../redux/cartQuantityReducer/action';


const ProductDetails = () => {
  const { id } = useParams();
  const { singleProduct } = useSelector(store => store.singleProductReducer);
  const { offer_price, key_features, actual_price } = singleProduct;
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  const {userAddToCart,isLoading} = useSelector(store=>store.userCartQuantityReducer);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();






  const checkProduct = () => {

    for (let ele of userAddToCart) if (ele._id === id) return true
    return false

  }

  const addToCartHandler = async () => {

    if (!isAuth) {
      toast({ title: "Login required", description: "User needs to login", status: "error", duration: 4000, isClosable: true, position: "top" })
      navigate("/login")
      
    }
    else if (checkProduct()) toast({ title: "Product already added in cart", status: "error", duration: 4000, isClosable: true, position: "top" })
    else {
        dispatch(addNewCartProduct(dispatch,[...userAddToCart,{...singleProduct,qty:1}]))
        toast({ title: "Product Added", status: "success", duration: 4000, isClosable: true, position: "top" })

    }

  }

 




  return (
    <Grid templateColumns="repeat(2,1fr)" gap={20}>
      <GridItem >
        <Stack style={{ fontSize: "0.8rem", fontWeight: 700, margin: "0.8rem auto" }} >
          <Text>Gain more with offers (3)</Text>
          <HStack>  <FontAwesomeIcon icon={faTags} style={{ color: 'green' }} /><Text color="#585757">Upto 5000 discount on Yes Bank Credit Cards and EMI transactions.</Text></HStack>
          <HStack>  <FontAwesomeIcon icon={faTags} style={{ color: 'green' }} /><Text color="#585757">7% unlimited Instant Discount with Kotak Credit Card EMI transactions.</Text></HStack>
          <HStack>  <FontAwesomeIcon icon={faTags} style={{ color: 'green' }} /><Text color="#585757">5% Instant Discount with OneCard Credit Cards.</Text></HStack>
        </Stack>
        <Stack style={{ fontSize: "0.8rem", fontWeight: 700, margin: "1rem auto", borderTop: "1px solid rgb(225 229 230)" }}>
          <Text mt="1rem">Save more with EMI/Cashback (5) <Box as="span">Read-T&C</Box></Text>
          <HStack>  <FontAwesomeIcon icon={faSquareCheck} style={{ color: 'green' }} /><Text color="#585757">Credit Card No-Cost EMI Options.</Text></HStack>
          <HStack>  <FontAwesomeIcon icon={faSquareCheck} style={{ color: 'green' }} /><Text color="#585757">Debit Card No-Cost EMI Options.</Text></HStack>
          <HStack>  <FontAwesomeIcon icon={faSquareCheck} style={{ color: 'green' }} /><Text color="#585757">Credit Card Low-Cost EMI Options.</Text></HStack>
          <HStack>  <FontAwesomeIcon icon={faSquareCheck} style={{ color: 'green' }} /><Text color="#585757">Debit Card Low-Cost EMI Options.</Text></HStack>
          <HStack>  <FontAwesomeIcon icon={faSquareCheck} style={{ color: 'green' }} /><Text color="#585757">EMIs (Credit Cards) from ₹${Math.floor((offer_price * 10) / 100)}/month</Text></HStack>

        </Stack>
        <Stack style={{ fontSize: "0.8rem", fontWeight: 700, margin: "1rem auto", borderTop: "1px solid rgb(225 229 230)" }}>

          <Text mt="1rem">Warranty</Text>
          <UnorderedList>
            <ListItem><Box as="span">Warranty:</Box><Box as="span" color="#585757">1 Year manufacturer warranty</Box> </ListItem>

          </UnorderedList>
        </Stack>

        <Stack style={{ fontSize: "0.8rem", fontWeight: 700, margin: "1rem auto", borderTop: "1px solid rgb(225 229 230)" }}>
          <Text mt="1rem">Key Features</Text>
          <UnorderedList>
            {key_features.map(ele => <ListItem key={ele} color="#585757">{ele}</ListItem>)}

          </UnorderedList>
        </Stack>

        <Stack style={{ fontSize: "0.8rem", fontWeight: 700, margin: "1rem auto", borderTop: "1px solid rgb(225 229 230)" }}>
          <Text mt="1rem">Return Policy</Text>
          <UnorderedList>
            <ListItem color="#585757">For return eligibility.</ListItem>
            <ListItem color="#585757">All accessories, product & packaging need to be returned in original condition.</ListItem>

          </UnorderedList>
        </Stack>

        <Stack>

        </Stack>


      </GridItem>
      <GridItem ml="2rem" style={{ textAlign: "left" }}>
        <Stack style={{ color: "#272727", fontSize: "0.8rem" }}>
          <Text>Offer Price: <Box as="span" fontSize="1rem" color="rgb(0, 51, 128)">₹{offer_price}</Box></Text>
          <Text>MRP:&nbsp;<Box as="span" textDecoration="line-through" fontSize="1rem"> ₹{actual_price}</Box><Box as="span" fontSize="1rem">&nbsp;(Inclusive of all taxes)</Box></Text>
          <Text style={{ color: " rgb(67, 160, 71)" }}>You Save: {Math.floor(100 - ((offer_price * 100) / actual_price))}%(₹{actual_price - offer_price})</Text>
          <Text>EMIs (Credit Cards) from ₹{Math.floor((offer_price * 10) / 100)}/month</Text>
          <Heading as='h6' size='xs'>FREE Shipping!</Heading>
          {
            isLoading?<Button colorScheme='red'><Spinner /></Button>: <Button colorScheme='red' onClick={addToCartHandler}>ADD TO CART</Button>
          }
        </Stack>
      </GridItem>
    </Grid>
  );
}

export default ProductDetails;
