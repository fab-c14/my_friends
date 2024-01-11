// Added At Learning Redux
import { CHANGE_SEARCH_FIELD } from "./constants"
export const setSearchField = (text) => ({
    type:CHANGE_SEARCH_FIELD, // action to be taken
    payload:text // whatever data is need to go on reducer 
})
