import React from 'react';
import { Center, Image } from '@chakra-ui/react';
import LoadingImage from "../../Images/Loading Spinner.gif"

const LoadingSpinner = () => {
  return (
      <Center><Image src={LoadingImage} alt="Loading..."/></Center>
  );
}

export default LoadingSpinner;
