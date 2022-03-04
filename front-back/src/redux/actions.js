import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "./actionTypes"
import axios from 'axios'

export const registerUser=(newUser) => async(dispatch)=>{
    dispatch({
        type:REGISTER
    })
    try {
        const {data}=await axios.post('/user/register',newUser);
        dispatch({
            type:REGISTER_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:REGISTER_FAIL,
            payload: error.response.data,
        });
    }
}

export const loginUser=(User)=>async(dispatch)=>{
    dispatch({
        type:LOGIN
    })
    try {
        const {data}=await axios.post('/user/login',User);
        console.log(data)
        localStorage.setItem('token',data.token)
        dispatch({
            type:LOGIN_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload: error.response.data,
        });
    }
}


export const logout = () => {
    localStorage.removeItem('token')
    return({
        type:LOGOUT
    })
}