import React, { useState } from 'react';
import { FormControl, Heading, Input, Stack, Tag, TagLabel, Box, Button, Flex, useToast } from '@chakra-ui/react';
import { BiSolidHide, BiSolidShow } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { addNewUser } from '../../api/api';
import axios from 'axios';
import url from '../../url';

const initial = {
    name: "",
    email: "",
    password: ""
}

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [userDetails, setUserDetails] = useState(initial);
    const { email, password, name } = userDetails;
    const navigate = useNavigate();
    const toast = useToast();

    const handleUserRegister = async (e) => {
        e.preventDefault();

        const res = await addNewUser(userDetails)
        if (res.status === 201) {
            toast({ position: "top", title: 'Account Created.', status: 'success', duration: 4000, isClosable: true, description: "Account has been created successfully" });
            setTimeout(() => {
                navigate("/login")
            }, 4000);
        }
        else toast({ title: 'Email already exists.', status: 'error', duration: 4000, isClosable: true, position: "top" })
}







    return (
        <>
            <Heading textAlign="center">Register Here</Heading>
            <form onSubmit={handleUserRegister}>
                <Stack>

                    <Tag bg="none"><TagLabel>Name:</TagLabel></Tag>
                    <FormControl isRequired> <Input type='text' value={name} onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })} /></FormControl>
                    <Tag bg="none"><TagLabel>Email:</TagLabel></Tag>
                    <FormControl isRequired> <Input type='email' onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} value={email} /></FormControl>
                    <Tag bg="none"><TagLabel>Password :</TagLabel></Tag>
                    <FormControl isRequired><Flex alignItems="center" border="2px solid #e2e8f0" p="0.5rem 0.7rem" style={{ borderRadius: "0.4rem" }}><Input variant="unstyled" type={showPassword ? "text" : "password"} autoComplete='off' onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} value={password} />{showPassword ? <BiSolidHide onClick={() => setShowPassword(!showPassword)} /> : <BiSolidShow onClick={() => setShowPassword(!showPassword)} />}</Flex></FormControl>

                    <Box textAlign="center"  ><Button type='submit' color="white" bg="#e42529" _hover={{ color: "white", bg: "#e42529" }} style={{ marginRight: "1rem" }}>Register</Button></Box>
                </Stack>


            </form>

        </>
    );
}

export default Register;
