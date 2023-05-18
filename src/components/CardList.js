import React from "react";
import Card from "./Card";

const CardList = ({friends})=>{
    // if(true){
    //     throw new Error('NOOOOOOOOO !'); // this was for error Boundary
    // }
    const cardComponent = friends.map((user,i)=>{
        return <Card key={i} id={friends[i].id} name={friends[i].name} email={friends[i].email}/> 
    })
    return(
        <div>
{/*         
        <Card id={friends[1].id} name={friends[1].name} email={friends[1].email}/>
        <Card id={friends[2].id} name={friends[2].name} email={friends[2].email}/>
        <Card id={friends[3].id} name={friends[3].name} email={friends[3].email}/>
        <Card id={friends[4].id} name={friends[4].name} email={friends[4].email}/> */}
        {/* now lets wrap it - used map you can use forEach */
        }
        {/* anything inside this is javascript*/}
        {cardComponent};
      </div>
    );
}

export default CardList;