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
// import React from 'react'

export const userReducer = (state = {user: {}}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case NEW_USER_REQUEST:
        case LOAD_USER_REQUEST:
            return{
                loading: true,
                isAuthenticate:false
            }
            case LOGIN_SUCCESS:
            case NEW_USER_SUCCESS:
            case LOAD_USER_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    isAuthenticate:true,
                    newUser: action.payload,
                    // success: action.payload,
                }

                case LOGIN_FAIL:
                case NEW_USER_FAIL:
           return{
                ...state,
                loading: false,
                isAuthenticate:false,
                newUser: null,
                error: action.payload,
            }

    
            case LOAD_USER_FAIL:
            return{
                loading: false,
                isAuthenticate:false,
                newUser: null,
                error: action.payload,
            }

            case LOGOUT_SUCCESS:
            return{
                loading: false,
                isAuthenticate:false,
                newUser: null,
            }

            case LOGOUT_FAIL:
                return{
                    ...state,
                    loading: false,
                    error: action.payload,
                }

            case CLEAR_ERRORS:
                return {
                  ...state,
                  error: null,
                };

        default:
            return state;
    }
}

