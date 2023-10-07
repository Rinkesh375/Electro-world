import React, { useEffect, useState } from 'react';
import { Box, Stack, Image, Input, Button, HStack, Flex, Text, FormControl, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow, Portal } from '@chakra-ui/react';
import Logo from "../../Images/ElectroWorld_image.png"
import { BsSearch } from 'react-icons/bs';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { BiUser } from 'react-icons/bi';
import style from "../../Style/TopSearchBar.module.css"
import { getProduct } from '../../redux/productReducer/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { USER_LOGOUT } from '../../redux/userLoginReducer/actionType';
import { getAddToCart } from '../../redux/cartQuantityReducer/action';




const TopSearchBar = () => {
    const [searchInputText, setSearchInputText] = useState("");
    const isAuth = JSON.parse(localStorage.getItem("isAuth"));
    let { userDetail } = useSelector(store => store.userLoginReducer);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    let quantity = useSelector(store=>store.userCartQuantityReducer.userAddToCart.length )
  
  









    const handleLogout = () => {
        localStorage.clear();
        dispatch({ type: USER_LOGOUT })


    }
    useEffect(() => {
        dispatch(getProduct(dispatch, {
            params: {
                category: "mobile"
            }
        }))
        isAuth && dispatch(getAddToCart(dispatch)) 
    }, [])
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
                                <Input variant="unstyled" _placeholder={{ color: "white", }} placeholder='Search Products' onChange={(e) => setSearchInputText(e.target.value)} /><BsSearch className={`${style["searchIcon"]}`} />

                            </Flex>
                        </FormControl>
                    </form>
                </Box>
                <HStack>
                    <Box >Select Your Pin Code |</Box>
                    <Box ><HStack><Box position="relative"><PiShoppingCartSimple />{JSON.parse(localStorage.getItem("isAuth")) && quantity?<Box
                        position="absolute"
                        top="-8px"
                        right="-8px"
                        bg="#e42529"
                        borderRadius="50%"
                        width="20px"
                        height="20px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        color="white"
                        fontWeight="bold"
                        fontSize="sm"
                    >
                       {quantity }
                    </Box>:null}</Box> <Text position="relative">Cart  |</Text> </HStack></Box>

                    <Box onClick={() => setOpen(!open)}>
                        <Popover isOpen={open}>
                            <PopoverTrigger >
                                <HStack><Text as="span" fontWeight="bold">{JSON.parse(localStorage.getItem("isAuth")) ? JSON.parse(localStorage.getItem('userDetail'))?.name : "Guest"}</Text><BiUser /></HStack>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent  >
                                    <PopoverArrow />


                                    <PopoverBody>
                                        <Stack>

                                            {JSON.parse(localStorage.getItem("isAuth")) ? <Button onClick={handleLogout}>Sign Out</Button> : <Link to="/login" > <Button variant="none">Sign In</Button></Link>}
                                            {JSON.parse(localStorage.getItem("isAuth")) ? <Link to="/placedOrder">  <Button w="100%">Your Order</Button></Link> : null}
                                        </Stack>
                                    </PopoverBody>

                                </PopoverContent>
                            </Portal>
                        </Popover>

                    </Box>

                    {/* <Box ><HStack><BiUser /> <Box as="span">Rinkesh</Box></HStack></Box> */}
                </HStack>
            </Flex>

        </Flex>
    );
}

export default TopSearchBar;
