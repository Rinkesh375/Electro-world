import { useSelector } from 'react-redux';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import LoadingSpinner from '../ProductPageComponents/LoadingSpinner';
import { Box, Image, IconButton, CardBody, Card, Text, VStack, Stack, Heading, Center,HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const ProductSlider = () => {
  const sliderRef = useRef(null);

  const { productArray,isLoading } = useSelector(store => store.productReducer);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4, // Display 4 products in a row
    slidesToScroll: 4,
  };

  const slideNext = () => {
    sliderRef.current.slickNext();
  };

  const slidePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Box style={{ marginTop: "1rem", borderTop: "3px solid #f7f7f7", paddingTop: "1rem", boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" }}>

      <Heading as='h3' size='lg' ml="1rem" color="#003380">Great Deals On Products</Heading>
      <Box position="relative" style={{ overflow: "hidden" }}>
      {
          isLoading?<Center><LoadingSpinner/></Center>:<>
               <Slider ref={sliderRef} {...sliderSettings} >

{productArray.map((ele, index) => <Link key={ele._id} to={`/product/${ele.id}`}   >
  <Card maxW='sm' key={index} margin="1rem" style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" }}>


    <CardBody>
      <VStack>
        <Image w="100%" src={ele.image} alt='Green double couch with wooden legs' borderRadius='lg' height="350px" />
        <HStack style={{width: "390px",whiteSpace: "nowrap",overflow: "hidden",textOverflow: "ellipsis"}}><Heading textAlign="left" as='h6' size='xs' fontWeight="bold" color="#003380" style={{display: "inline-block",
whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"}} >{ele.name.substring(0,62)}...</Heading></HStack>
      </VStack>

      <Stack mt="0.4rem">
        <Text fontSize="0.8rem" fontWeight="bold">Deal Price:<Box as="span">{` ₹ ${ele.offer_price}`}</Box> </Text>
        <Text fontSize="0.8rem" >M.R.P: <Box textDecoration="line-through" as="span">{` ₹ ${ele.actual_price}`}</Box> </Text>
      </Stack>
    </CardBody>

  </Card>

</Link>)}

</Slider>
<IconButton
icon={<ChevronLeftIcon fontSize="2rem" />}
position="absolute"
bg="#E0E0E0"
top="50%"
left="0.5rem"

transform="translateY(-50%)"
onClick={slidePrev}
/>
<IconButton
bg="#E0E0E0"
icon={<ChevronRightIcon fontSize="2rem" />}
position="absolute"
top="50%"

right="0.5rem"
transform="translateY(-50%)"
onClick={slideNext}
/>
          
          </>
      }
    
      </Box>

    </Box>
  );
};

export default ProductSlider;
