// App.js
import React, { useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import { connect} from 'react-redux';
import { requestFriends, setSearchField } from '../actions';
import Scroll from "../components/Scroll";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchFriends.SearchField,
    friends: state.requestFriends.robots,
    isPending: state.requestFriends.isPending,
    error: state.requestFriends.error
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestFriends: () => dispatch(requestFriends())
  };
}

function App({ searchField, friends, isPending, error, onSearchChange, onRequestFriends }) {

  useEffect(() => {
    onRequestFriends();
  }, []);

  const filterFriends = friends.filter((friend) => {
    return friend.name && friend.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1>Loading ... </h1>
  ) : error ? (
    <h1>Error fetching friends.</h1>
  ) : (
    <div className='tc'>
      <h1 className='f1'>My College Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList friends={filterFriends} />
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
