import {
    LOGIN_EXITOSO,
    LOGIN_ERROR,
} from "../../types"

export default (state, action) => {
    switch(action.type){
        case LOGIN_EXITOSO:
            return{
                ...state
            };
        case LOGIN_ERROR:
            return{
                ...state
            };
        default:
            return state;
    }
}