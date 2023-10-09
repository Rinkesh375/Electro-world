import React from 'react';
import { Center,Box } from '@chakra-ui/react';
import Register from '../components/RegisterPageComponents/Register';

const RegisterPage = () => {
  return (
    <Center>

    <Box p="2rem" w="30%" my="2rem" textAlign="center" style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' }}>
      <Register/>
    </Box>
</Center>
  );
}

export default RegisterPage;
