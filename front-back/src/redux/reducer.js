const {REGISTER} = require ("./actionTypes");
const {REGISTER_SUCCESS} = require ("./actionTypes");
const {REGISTER_FAIL} = require ("./actionTypes");




const init = {
    loading:false,
    errors:null,
    users:null
}

const reducer = (state=init,{type,payload})=>{
    switch (type) {
        case REGISTER:
            return{
                ...state,
                loading:true
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                loadig:false,
                users:payload,
                errors:null,
            }
        case REGISTER_FAIL:
            return{
                ...state,
                loading:false,
                errors:payload
            }
    
        default:
return state
    }
}; 


export default reducer