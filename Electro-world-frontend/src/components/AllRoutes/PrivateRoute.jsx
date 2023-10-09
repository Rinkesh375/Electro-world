import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const location = useLocation()
     const user_login = JSON.parse(localStorage.getItem("isAuth"));
     const isAuth = useSelector(store=>store.userLoginReducer) 
     return user_login ?children:<Navigate to="/login" state={location.pathname} replace={true} />
}

export default PrivateRoute
