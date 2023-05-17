import React from 'react';


// const Card = (props)=>{
const Card = ({name,email,id})=>{ // this is destructuring directly now there is no need of below line 
    // const {name,email,id} = props; // destructuring
    return(
        <div className='tc bg-light-green dib br3 pr3 ma2 grow bw2 shadow-5'>
            {/* <h1>{props.name}</h1> */} {/*this is for when you are not destructuring the code*/}
            <h1>{name}</h1>

            <div >
                <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
                <div>
                    <h2>Name : {name}</h2>
                    <p>Email : {email}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;