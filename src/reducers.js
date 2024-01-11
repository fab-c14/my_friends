import { CHANGE_SEARCH_FIELD } from "./constants"

// lets create a reducer
const intialState = {
    SearchField:''
}
export const searchFriends = (state=intialState,action={})=>{// actions are objects we are returning
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            // return Object.assign({},state,SearchField:action.payload);//another way
            return {...state,SearchField:action.payload};
        default:
            return state;

    }
}