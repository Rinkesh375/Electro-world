import { Box, Center, Checkbox, FormControl, Heading, Input, Stack, Flex, Button, useToast, Grid, GridItem, RadioGroup, Radio } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { getProduct } from '../../redux/productReducer/action';
import MobileCheckBoxFilter from './MobileCheckBoxFilter';
import LaptopCheckBoxFilter from './LaptopCheckBoxFilter';
import TvCheckBoxFilter from './TvCheckBoxFilter';
import EarphoneCheckBoxFilter from './EarphoneCheckBoxFilter';
import AcCheckBoxFilter from './AcCheckBoxFilter';



const SideBarFilter = ({ page }) => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const [searchParam, setSearchParam] = useSearchParams();
    const [order, setOrder] = useState(searchParam.get("order") || "")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [priceFilter, setPriceFilter] = useState({ minPrice, maxPrice })
    const [brand, setBrand] = useState(searchParam.get("brand") || [])
  


    const brandFilterHandler = (e) => {

        const { value } = e.target;
        let tempArr = [...brand];
        if (tempArr.includes(value)) tempArr = tempArr.filter(ele => ele !== value)
        else tempArr.push(value)
        setBrand(tempArr)
    }
    const priceFilterHandler = (e) => {
        e.preventDefault();

        setPriceFilter({ minPrice, maxPrice });


    }
    useEffect(() => {

        const urlQuery = { brand }
        minPrice && maxPrice && (urlQuery.minPrice = minPrice);
        minPrice && maxPrice && (urlQuery.maxPricePrice = maxPrice);
        order === "asc" && (urlQuery.order = order);
        order === "desc" && (urlQuery.order = order);
        order === "asc" && (urlQuery.sort = "offer_price");
        order === "desc" && (urlQuery.sort = "offer_price");
        setSearchParam(urlQuery)
        const obj = {
            params: {
                category,
                brand,
                _limit: 12,
                _page: page

            }
        }
        minPrice && maxPrice && (obj.params.minPrice = minPrice);
        minPrice && maxPrice && (obj.params.maxPrice = maxPrice);
        order === "asc" && (obj.params._order = order);
        order === "desc" && (obj.params._order = order);
        order === "asc" && (obj.params._sort = "offer_price");
        order === "desc" && (obj.params._sort = "offer_price");

        dispatch(getProduct(dispatch, obj))
    }, [brand, category, page, priceFilter, order])

    return (
        <Stack m="2rem" spacing={4} >

            <Box style={{ boxShadow: " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px", padding: "1rem", borderRadius: "0.4rem" }}>
                <Heading mb="1rem" as="h4" size="md">Filter By Brand</Heading>
                {category == "mobile" ? <MobileCheckBoxFilter brand={brand} brandFilterHandler={brandFilterHandler} /> : category == "laptop" ? <LaptopCheckBoxFilter brand={brand} brandFilterHandler={brandFilterHandler} /> : category == "television" ? <TvCheckBoxFilter brand={brand} brandFilterHandler={brandFilterHandler} /> : category == "earphone" ? <EarphoneCheckBoxFilter brand={brand} brandFilterHandler={brandFilterHandler} /> : <AcCheckBoxFilter brand={brand} brandFilterHandler={brandFilterHandler} />
                }


            </Box>

            <Box style={{ boxShadow: " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px", padding: "1rem", borderRadius: "0.4rem" }}>
                <Heading mb="1rem" as="h4" size="md">Filter By Price Range</Heading>
                <form onSubmit={priceFilterHandler}>
                    <FormControl isRequired>
                        <Grid templateColumns='1fr 0.2fr 1fr' alignItems="center" gap="1rem">
                            <GridItem><Input type='number' placeholder='Min Price' mr="1rem" onChange={(e) => setMinPrice(e.target.value)} value={minPrice} /></GridItem>
                            <GridItem><Box>To</Box></GridItem>
                            <GridItem><Input type='number' placeholder='Max Price' onChange={(e) => setMaxPrice(e.target.value)} value={maxPrice} /></GridItem>
                        </Grid>
                        <Center m="1rem auto"> <Button colorScheme='teal' variant='solid' type='submit'>Filter Price</Button></Center>
                    </FormControl>

                </form>
            </Box>

            <Box style={{ boxShadow: " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px", padding: "1rem", borderRadius: "0.4rem" }}>
                <Heading mb="1rem" as="h4" size="md">Sort By Price</Heading>

                <RadioGroup value={order} onChange={setOrder}>
                    <Stack spacing={5} >
                        <Radio colorScheme='green' value='asc'>Low to High</Radio>
                        <Radio colorScheme='green' value='desc'>High to Low</Radio>
                    </Stack>
                </RadioGroup>

            </Box>




        </Stack>
    );
}

export default SideBarFilter;
