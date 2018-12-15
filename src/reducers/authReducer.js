import {USER_LOGIN} from "../actionTypes";

const initialState = {
    auth:false
};

export default (state = initialState,action) => {
    switch(action.type){
        case USER_LOGIN:
        return {
            ...state,
            auth:action.payload
        };

        default : 
        return state;
    }
}