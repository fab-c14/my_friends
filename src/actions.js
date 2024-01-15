// Added At Learning Redux
import { CHANGE_SEARCH_FIELD,REQUEST_FRIENDS_FAILED,REQUEST_FRIENDS_SUCCESS,REQUEST_FRIENDS_PENDING } from "./constants"
export const setSearchField = (text) => {
    // console.log(text)
    return{
        type:CHANGE_SEARCH_FIELD, // action to be taken
        payload:text // whatever data is need to go on reducer 
    }
}

export const requestFriends = ()=>(dispatch)=> {
    dispatch({type:REQUEST_FRIENDS_PENDING});
    // now need to fetch
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => dispatch({type:REQUEST_FRIENDS_SUCCESS,payload:data}))
      .catch(error=>dispatch({type:REQUEST_FRIENDS_FAILED,payload:error}))
}