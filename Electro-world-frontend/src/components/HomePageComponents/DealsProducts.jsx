import React from 'react'
import { GridItem, Grid, Image, Heading, Box } from '@chakra-ui/react'
import { DealsProudctsImage } from '../../Images/BrandPromiseImage'
import { Link } from 'react-router-dom'

const DealsProducts = () => {
    return (
        <Box style={{ marginTop: "1rem", borderTop: "3px solid #f7f7f7", paddingTop: "1rem" ,boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}}>
            <Heading as='h3' size='lg' ml="1rem" color="#003380">Great Deals on Electronics</Heading>
            <Grid templateColumns='repeat(4, 1fr)' gap="1rem"   >
                {
                    DealsProudctsImage.map(ele => <Link key={ele.category} to={`/category/${ele.category}`}>
                        <GridItem p="1rem" textAlign="center">

                            <Image src={ele.url} />
                        </GridItem>
                    </Link>)
                }



            </Grid>

        </Box>
    )
}

export default DealsProducts