import { CHANGE_SEARCH_FIELD,REQUEST_FRIENDS_FAILED,REQUEST_FRIENDS_SUCCESS,REQUEST_FRIENDS_PENDING } from "./constants"

// lets create a reducer
const intialStateSearch = {
    SearchField:''
}

export const searchFriends = (state=intialStateSearch,action={})=>{// actions are objects we are returning
    // console.log(action.type)
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            // return Object.assign({},state,SearchField:action.payload);//another way
            return {...state,SearchField:action.payload};
        default:
            return state;

    }
}
const intialStateFriends = {
    // SearchField:''
    isPending:false,
    robots:[],
    error:''
}
export const requestFriends = (state=intialStateFriends,action={})=>{
    switch(action.type){
        case REQUEST_FRIENDS_PENDING:
            return {...state,isPending:true}
        case REQUEST_FRIENDS_SUCCESS:
            return {...state,robots:action.payload,isPending:false}
        case REQUEST_FRIENDS_FAILED:
            return {...state,error:action.payload,isPending:false}
        default:
            return state;

    }
}