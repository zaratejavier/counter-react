import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";


//class component with state
class App extends React.Component{

  render(){
    return(
      <div>
          <Counter name={"Counter 1"}/>
      </div>
    )
  }
}

export default App;
