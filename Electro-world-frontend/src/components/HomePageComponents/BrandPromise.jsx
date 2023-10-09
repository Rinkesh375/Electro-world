import React from 'react'
import { Heading,Stack,HStack,Box,Image,Text,Flex, Grid, GridItem, Center } from '@chakra-ui/react'
import { BrandImages } from '../../Images/BrandPromiseImage'


const BrandPromise = () => {
  return (
   <Stack style={{marginTop:"1rem",borderTop:"3px solid #f7f7f7",paddingTop:"1rem",boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}}>
    <Heading textAlign="center" color="#003380" as='h3' size='lg'>THE ELECTRO WORLD BRAND PROMISE</Heading>
     <Grid templateColumns='repeat(4, 1fr)' gap="1rem" m="1rem"  >
       {
        BrandImages.map(ele=><GridItem key={ele.url} borderRadius="0.3rem" bg="#f7f7f7" p="1rem" textAlign="center">
        <Center>
        <Image  src={ele.url}/>

        </Center>
        <Heading as='h5' size='sm'>{ele.heading}</Heading>
        <Text color="#003380" fontSize="0.8rem">{ele.text}</Text>
      </GridItem>)
       }
      
      

     </Grid>
   </Stack>
  )
}

export default BrandPromise