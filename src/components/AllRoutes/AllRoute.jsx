import React from 'react'
import { Route,Routes } from 'react-router-dom'
import ProductPage from '../../pages/ProductPage'
import HomePage from '../../pages/HomePage'
import SingleProductPage from '../../pages/SingleProductPage'

const AllRoute = () => {
  return (
       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/category/:category" element={<ProductPage/>} />
        <Route path="product/:id" element={<SingleProductPage/>}/>
       </Routes>
  )
}

export default AllRoute