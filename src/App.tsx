import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import List from "./List"
import Add from "./Add_to_list"
export interface IState {
  people:{
  name:string,
  age:number,
  url:string,
  notes?:string
}[]
}
function App() {
  const [people,setPeople]=useState<IState["people"]>([{
    name:"nihal",
    age:23,
    url:"nxjnx",
    notes:"nsjhhsj"
    }])
  return (
    <div className="App">
      <h1>People invited to party</h1>
      <List people={people}/>
      <Add people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
