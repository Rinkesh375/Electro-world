import axios from "axios";
import { USER_LOGIN, USER_LOGOUT } from "./actionType";
const initial = {
    isAuth: false,
    userDetail: {}
}

const userLoginReducer = (state = initial, { type, payload }) => {
    switch (type) {
        case USER_LOGIN: return { isAuth: true, userDetail: payload };
        case USER_LOGOUT: return { ...initial }
        default: return { ...initial };
    }
}

export {userLoginReducer}

