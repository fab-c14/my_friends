import React, {Component} from "react";
import CardList from "./CardList";
import { friends } from "./friends";
import SearchBox from "./SearchBox";

// const steate = {
//     friends:friends,
//     searchfield:''
// }
//  how to add states

class App extends Component{
    constructor(){
        super(); // calling the constructor of inherited (parent)
        // we use constructor
        this.state = { // state can change , they live inside parent but we have to inherit them
            friends:friends,
            searchfield:''
        }
    }


    onSearchChange = (event)=>{
        // use dom manipulation
        this.setState({searchfield:event.target.value});
        // console.log(event.target.value);
        
        // console.log(filterFriends);
    }


    render(){
        const filterFriends = this.state.friends.filter(friends =>{
            return friends.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    return (
        <div className="tc">
            <h1>My College Friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList friends={filterFriends}/>
        </div>
        );
    }
}

export default App;

// props, state -> read props and render 
// one way data flow -> cardlist - pure function, receives input and gives same output - these are called pure components or dumb components. (this is really nice )

// that is this we have until this point, props never change, we never modify them, 
// but now we need a memory in our app

// State - obj (that describes your application whatever is entered in the state., we are able to change)

// STATE >> props 
// now lets start
