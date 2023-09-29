import React, { useEffect, useState } from 'react';
import { Box, Stack, Image, Input, HStack, Flex, VStack, Text, FormControl } from '@chakra-ui/react';
import Logo from "../../Images/ElectroWorld_image.png"
import { BsSearch } from 'react-icons/bs';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { BiUser } from 'react-icons/bi';
import style from "../../Style/TopSearchBar.module.css"
import { getProduct } from '../../redux/productReducer/action';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




const TopSearchBar = () => {
    const [searchInputText,setSearchInputText] = useState("");
    const dispatch = useDispatch()
    useEffect(()=>{
       searchInputText || dispatch(getProduct(dispatch,{params:{
        category:"mobile"
       }}))
    },[])
    return (
        <Flex flexDirection="column" bg="#2556CC" color="white" fontWeight="bold">
            <Flex direction="row" spacing='24px' position="absolute" right="1rem">
                <Box >Find a store | </Box>
                <Box >&nbsp; Buying guides | </Box>
                <Box >&nbsp; Contact us</Box>
            </Flex>
            <Flex m="1.6rem" justifyContent="space-between">
                <Box width="200px">
                    <Link to="/"><Image width="100%" h="100%" src={Logo} alt='Electro World Image' /></Link>
                </Box>
                <Box w="30%" >
                    <form>
                        <FormControl isRequired>
                            <Flex p="0.3rem 1rem" w="100%" border="1px solid #11a6d8" borderRadius="1rem" alignItems="center">
                                <Input variant="unstyled" _placeholder={{ color: "white", }} placeholder='Search Products' onChange={(e)=>setSearchInputText(e.target.value)} /><BsSearch className={`${style["searchIcon"]}`} />

                            </Flex>
                        </FormControl>
                    </form>
                </Box>
                <HStack>
                    <Box >Select Your Pin Code |</Box>
                    <Box ><HStack><PiShoppingCartSimple /> <Text>Cart |</Text></HStack></Box>
                    <Box ><HStack><BiUser /> <Text>Login</Text></HStack></Box>
                </HStack>
            </Flex>

        </Flex>
    );
}

export default TopSearchBar;
