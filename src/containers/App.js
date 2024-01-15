import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import { connect, useSelector, useDispatch } from 'react-redux';
import { setSearchField } from '../actions';
import Scroll from "../components/Scroll";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  };
}

function App() {
  const [Friends, setFriends] = useState([]);
  const searchField = useSelector((state) => state.SearchField);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setFriends(users));
  }, []);

  const filterFriends = Friends.length > 0
    ? Friends.filter((friend) => {
        return friend.name && friend.name.toLowerCase().includes(searchField.toLowerCase());
      })
    : [];

  return !Friends.length ? (
    <h1>Loading ... </h1>
  ) : (
    <div className='tc'>
      <h1 className='f1'>My College Friends</h1>
      <SearchBox searchChange={(event) => dispatch(setSearchField(event.target.value))} />
      <Scroll>
        <CardList friends={filterFriends} />
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
