import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { friends } from './friends';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Card id={friends[0].id} name={friends[0].name} email={friends[0].email}/> 
      <Card id={friends[1].id} name={friends[1].name} email={friends[1].email}/>
      <Card id={friends[2].id} name={friends[2].name} email={friends[2].email}/>
      <Card id={friends[3].id} name={friends[3].name} email={friends[3].email}/>

    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
