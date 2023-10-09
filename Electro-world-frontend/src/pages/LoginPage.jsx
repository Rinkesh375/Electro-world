import React from 'react';
import Login from '../components/LoginPageComponents/Login';
import { Box,Center } from '@chakra-ui/react';


const LoginPage = () => {
  return (
<Center>

    <Box p="2rem" w="30%" my="2rem" textAlign="center" style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' }}>
      <Login/>
    </Box>
</Center>


  );
}

export default LoginPage;
