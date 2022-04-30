import { SET_CURRENT_USER, USER_LOADING, GET_ERRORS } from '../constants/actionTypes';
import setAuthToken from "../api/setAuthToken";
import jwt_decode from "jwt-decode";
import * as api from '../api/index.js';

export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };

export const login = userData => async (dispatch) => {
    try {
        const { data } = await api.login(userData);
        const token = data.token;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
    } catch(error) {
        console.log(error)
        dispatch({ type: GET_ERRORS, payload: error.response });
    }
};

export const register = (userData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.register(userData);
        const token = data.token;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
    } catch(error) {
        console.log(error)
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    };
};

// User loading
export const setUserLoading = () => {
    return {
      type: USER_LOADING
    };
};

  // Log user out
export const logout = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};
