import {LOADER} from "../actionTypes";

const initialState = {
    loaderShow:false
}
export default (state = initialState,action) => {
    switch(action.type){
        case LOADER:
        return {
            ...state,
            loaderShow:action.payload
        };
        default :
            return state;
    }
}