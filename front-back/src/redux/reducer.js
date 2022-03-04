const {REGISTER} = require ("./actionTypes");
const {REGISTER_SUCCESS} = require ("./actionTypes");
const {REGISTER_FAIL,LOGOUT,LOGIN,LOGIN_FAIL,LOGIN_SUCCESS} = require ("./actionTypes");
// import {LOGOUT} from './actionTypes'




const init = {
    loading:false,
    errors:null,
    users:null,
    isAuth:false
}

const reducer = (state=init,{type,payload})=>{
    switch (type) {
        case LOGOUT:
            return{
                ...state,
                users:null,
                isAuth:false
            }
        case REGISTER:
        case LOGIN:
            return{
                ...state,
                loading:true
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                loading:false,
                users:payload,
                errors:null,
                isAuth:true
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
            return{
                ...state,
                loading:false,
                errors:payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading:false,
                users:payload.user,
                isAuth:true
            }
    
        default:
return state
    }
}; 


export default reducer