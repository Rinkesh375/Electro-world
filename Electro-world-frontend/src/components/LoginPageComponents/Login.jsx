import React, { useState } from 'react';
import { FormControl, Heading, Input, Stack, Tag, TagLabel, Box, Button, Flex, Toast, useToast } from '@chakra-ui/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiSolidHide, BiSolidShow } from 'react-icons/bi';
import { loginGetUserDetails } from '../../api/api';
import { useDispatch } from 'react-redux';
import { USER_LOGIN } from '../../redux/userLoginReducer/actionType';
import { getAddToCart } from '../../redux/cartQuantityReducer/action';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const toast = useToast();
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const [userDetails, setUserDetails] = useState({
        email: "", password: ""
    })
    const { email, password } = userDetails
    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await loginGetUserDetails(userDetails);
   
        if (res.status === 200) {
            dispatch({ type: USER_LOGIN, payload: res.data })
            localStorage.setItem("isAuth", true)
            localStorage.setItem("userDetail", JSON.stringify(res.data))
         
            dispatch(getAddToCart(dispatch))
            toast({ position: "top", title: 'Login Successfully', status: 'success', duration: 2000, isClosable: true, })
            setTimeout(() => {

                if (location.state) navigate(location.state, { replace: true })
                else navigate("/", { replace: true })
            }, 2000)
        }
        else toast({ position: "top", title: 'Login Failed', status: 'error', duration: 4000, isClosable: true, description: "Please check your email and password" })
     
    }

    return (
        <>
            <Heading textAlign="center">Login Here</Heading>
            <form onSubmit={handleLogin}>
                <Stack>

                    <Tag bg="none"><TagLabel>Email:</TagLabel></Tag>
                    <FormControl isRequired> <Input type='email' value={email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} /></FormControl>
                    <Tag bg="none"><TagLabel>Password :</TagLabel></Tag>
                    <FormControl isRequired><Flex alignItems="center" border="2px solid #e2e8f0" p="0.5rem 0.7rem" style={{ borderRadius: "0.4rem" }}><Input variant="unstyled" type={showPassword ? "text" : "password"} autoComplete='off' value={password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />{showPassword ? <BiSolidHide onClick={() => setShowPassword(!showPassword)} /> : <BiSolidShow onClick={() => setShowPassword(!showPassword)} />}</Flex></FormControl>

                    <Box textAlign="center"  ><Link to="/register" style={{ marginRight: "1rem" }}><Button color="white" bg="#e42529" _hover={{ color: "white", bg: "#e42529" }}>Create New Account</Button></Link><Button _hover={{ color: "white", bg: "#e42529" }} type='submit' color="white" bg="#e42529" >Login</Button></Box>
                </Stack>


            </form>

        </>
    );
}

export default Login;
