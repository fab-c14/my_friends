import React from 'react';
// state
// props
// children - every props has a children
 // return props.children;
  // but if we do this
const Scroll = (props)=>{
   
    // console.log(props.children);
    // // return <h1> Hi <h1>;
    // return props.children;
    // lets create a scrollable component

    return (
        <div style={{overflowY:"scroll", border:'5px solid black',height:'400px'}}>
            {props.children}
        </div>
    )
};
export default Scroll;