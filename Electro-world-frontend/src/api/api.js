import axios from "axios";
import url from "../url";

const addNewUser = async (obj) => {
    obj = { ...obj, id: obj.email, orderHistory: [], addToCart: [] }
    try {
        const res = await axios.post(`${url}/users`, obj);
        return res
    } catch (error) {
        return error
    }



}


const loginGetUserDetails = async (email) => {
    try {
        const res = await axios.get(`${url}/users/${email}`);
        return res
    } catch (error) {
        return error
    }
}


const getUserAddCartDetail = async(id)=>{
    try {
        const res = await axios.get(`${url}/users/${id}`);
        return res.data.addToCart
    } catch (error) {
        
    } 

}


export { addNewUser,loginGetUserDetails,getUserAddCartDetail };