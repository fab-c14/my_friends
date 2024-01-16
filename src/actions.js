// actions.js
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_FRIENDS_PENDING,
    REQUEST_FRIENDS_SUCCESS,
    REQUEST_FRIENDS_FAILED
  } from "./constants";
  
  export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
  });
  
  export const requestFriends = () => (dispatch) => {
    dispatch({ type: REQUEST_FRIENDS_PENDING });
  
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => dispatch({ type: REQUEST_FRIENDS_SUCCESS, payload: data }))
      .catch((error) => dispatch({ type: REQUEST_FRIENDS_FAILED, payload: error }));
  };
  