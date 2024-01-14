import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
// import { friends } from "./friends"; we are going to use api instead of this now
import SearchBox from "../components/SearchBox";
import "./App.css";
import {connect} from 'react-redux';
import {setSearchField} from '../actions';
import Scroll from "../components/Scroll";
// import ErrorBoundary from "../components/ErrorBoundary";
// const steate = {
//     friends:friends,
//     searchfield:''
// }
//  how to add states
// moving this app to react hooks
// class App extends Component
function App(store) {
  // constructor(){
  //     super(); // calling the constructor of inherited (parent)
  //     // we use constructor
  //     this.state = { // state can change , they live inside parent but we have to inherit them
  //         friends:[], // this would be an empty array because at intially we would not have any friend/robot
  //         // react comes with lifecycle methods, these are methods which we can use, they will automatically trigger when app is loaded , lifecycle hooks (they are called)

  //         // the way react works is
  //         // 1.mounting - when our app is loaded , our webpage is nothing but a div with root id, when we say mount we are replacing component with actuall code written inside component
  //         // when mounting -> does this app have a constructor, does this have componentWillMount(), render(),componentDidMOunt()
  //         //`2.updating
  //         // you can found methods on official site
  //         // 3.unmounting - move to different page,
  //         searchfield:''
  //     }
  //     console.log('constructor');
  // }

  const [Friends, setFriends] = useState([]);
  const [SearchField, setSearchField] = useState("");

  // // 1. mount - example
  // componentDidMount(){
  //     // this.setState({friends:friends})
  //     // getting data from api and  using that data
  //     fetch('https://jsonplaceholder.typicode.com/users') // request to server
  //     .then(response=>{
  //         return response.json();
  //     })
  //     .then(users=>{
  //         this.setState({friends:users});
  //     })

  //     // console.log('componentdidmount');
  // }

  useEffect(() => {
    // console.log(store.getState());
    fetch("https://jsonplaceholder.typicode.com/users") // request to server
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        // this.setState({ friends: users });
        setFriends(users);
      });
  }, []);

  const onSearchChange = (event) => {
    // use dom manipulation
    // this.setState({ searchfield: event.target.value });
    setSearchField(event.target.value);
    // console.log(event.target.value);

    // console.log(filterFriends);
  };

  //   render() {
  //   console.log("render");
  const filterFriends = Friends.filter((friend) => {
    return friend.name.toLowerCase().includes(SearchField.toLowerCase());
  });

  //     if(!friends.length){
  //         return <h1>Loading ... </h1>
  //     }

  //     else{
  // return (
  //     <div className="tc">
  //         <h1 className="f1">My College Friends</h1>
  //         <SearchBox searchChange={this.onSearchChange}/>
  //         <Scroll> {/*lets create this component */}
  //             <CardList friends={filterFriends}/>
  //         </Scroll>
  //     </div>
  //     );
  // }
  // use ternary instead of if -else

  return !Friends.length ? (
    <h1>Loading ... </h1>
  ) : (
    <div className='tc'>
      <h1 className='f1'>My College Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        {" "}
        {/*lets create this component */}
        {/* <ErrorBoundary> */}
        <CardList friends={filterFriends} />
        {/* </ErrorBoundary> */}
      </Scroll>
    </div>
  );
}
// }

// export default App;

// props, state -> read props and render
// one way data flow -> cardlist - pure function, receives input and gives same output - these are called pure components or dumb components. (this is really nice )

// that is this we have until this point, props never change, we never modify them,
// but now we need a memory in our app

// State - obj (that describes your application whatever is entered in the state., we are able to change)

// STATE >> props
// now lets start

// now after completing we are going to discuss about the new topic which we have not covered

// in real life we would not write friends.js, we would something use that is called api
// we would make request and
// actually we can do it by using jsonplaceholder
// we can use this site to save our time and money
// using this lets make our app more releastic

// this app has some state so it is called smart component,

//

// ERROR Boundary in React
// ERROR Boundaries, if there has some error in component -> for whatever reason there was not a graceful way to handle it .

// even if component breaks, then

// we are going to learn error boundaries and add this to  our project

// deploying our react app
export default connect()(App);