
import React from 'react'
import Slider from '../components/HomePageComponents/Slider'
import Slider2 from '../components/HomePageComponents/Slider2'
import BrandPromise from '../components/HomePageComponents/BrandPromise'
import DealsProducts from '../components/HomePageComponents/DealsProducts'
import ProductSlider from '../components/HomePageComponents/ProductSlider'

const HomePage = () => {
    return (
        <>

            <Slider />
            <Slider2 />
            <BrandPromise />
            <DealsProducts />
            <ProductSlider/>
        </>
    )

}
export default HomePage