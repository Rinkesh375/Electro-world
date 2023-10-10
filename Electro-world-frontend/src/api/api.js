import axios from "axios";
import url from "../url";

const addNewUser = async (obj) => {
   
        const res = await axios.post(`${url}/users/register`, obj);
        return res
 



}


const loginGetUserDetails = async (obj) => {
   
    try {
        const res = await axios.post(`${url}/users/login`,obj);
        return res
    } catch (error) {
        return error
    }
}


const getUserAddCartDetail = async (id) => {
    try {
        const res = await axios.get(`${url}/users/${id}`);
        return res.data.addToCart
    } catch (error) {

    }

}


export { addNewUser, loginGetUserDetails, getUserAddCartDetail };