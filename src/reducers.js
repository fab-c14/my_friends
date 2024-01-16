// reducers/searchFriends.js
import { CHANGE_SEARCH_FIELD } from './constants';
import {
  REQUEST_FRIENDS_PENDING,
  REQUEST_FRIENDS_SUCCESS,
  REQUEST_FRIENDS_FAILED
} from './constants';

const initialStateSearch = {
  SearchField: ''
};

export const searchFriends = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, SearchField: action.payload };
    default:
      return state;
  }
};

// reducers/requestFriends.js

const initialStateFriends = {
  isPending: false,
  robots: [],
  error: ''
};

export const requestFriends = (state = initialStateFriends, action = {}) => {
  switch (action.type) {
    case REQUEST_FRIENDS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_FRIENDS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case REQUEST_FRIENDS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
