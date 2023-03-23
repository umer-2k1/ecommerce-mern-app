import axios from "axios";
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    NEW_USER_REQUEST,
    NEW_USER_SUCCESS,
    NEW_USER_FAIL,

    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,

    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    
    CLEAR_ERRORS,
  } from "../constants/userConstant";
export const getLoginUser = (email, password) => async(dispatch) =>{
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const config = {headers: {'Content-Type': 'application/json'}}
    const { data } = await axios.post(`http://localhost:5000/api/auth/loginUser`,
    // { withCredentials: true },
    {email, password},
    {  withCredentials: true, credentials: 'include',},
    config,
    );    
      dispatch({
        type:  LOGIN_SUCCESS,
        payload: data.newUser
        // payload: success
      })
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
}


export const registerNewUser = (userData) => async(dispatch)=>{
  try {
    dispatch({type: NEW_USER_REQUEST})
    const config = {headers: {'Content-Type': 'multipart/form-data'}}
    let url = `http://localhost:5000/api/auth/newUser`
    const {data} = await axios.post(url, userData, config )
    dispatch({
      type: NEW_USER_SUCCESS,
      payload: data.newUser,
    })
  } 
  catch (error) {
    dispatch({
      type: NEW_USER_FAIL,
      payload: error.response.data.message,
    })
  }
}

// Load User
export const loadTheUser = () => async(dispatch) =>{
  try {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
    let link = `http://localhost:5000/api/auth/me`
    const { data } = await axios.get(link,{  withCredentials: true});
    
      dispatch({
        type:  LOAD_USER_SUCCESS,
        payload: data.newUser
      })



  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
}

// Logout User
export const logoutUser = () => async(dispatch) =>{
  try {

    let link = `http://localhost:5000/api/auth/logoutUser`
    // const { data } = await axios.get(link, {withCredentials:true});
  await axios.post(link,null, {withCredentials:true});
    
      dispatch({type:  LOGOUT_SUCCESS})
localStorage.clear()
sessionStorage.clear()
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response.data.message,
    });
  }
}



// ckearing all errors
export const clearErrors = ()=> async (dispatch)=>{
  dispatch({
      type: CLEAR_ERRORS
  })
}