import {USER_LOGIN,LOADER} from "../actionTypes";
export const authenticate = (flag) => {
    return {
        type:USER_LOGIN,
        payload:flag
    }
}

export const loader = (flag) => {
    return {
        type:LOADER,
        payload:flag
    }
}

