import React from 'react'
import { Route,Routes } from 'react-router-dom'
import ProductPage from '../../pages/ProductPage'
import HomePage from '../../pages/HomePage'
import SingleProductPage from '../../pages/SingleProductPage'
import LoginPage from '../../pages/LoginPage'
import RegisterPage from '../../pages/RegisterPage'
import CartPage from '../../pages/CartPage'
import PrivateRoute from './PrivateRoute'


const AllRoute = () => {
  return (
       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/category/:category" element={<ProductPage/>} />
        <Route path="product/:id" element={<SingleProductPage/>}/>
        <Route path="/:id" element={<SingleProductPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/cart details' element={<PrivateRoute><CartPage/></PrivateRoute>}  />
       </Routes>
  )
}

export default AllRoute