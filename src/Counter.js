import React from 'react';
import './App.css';


class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {value: 0};
  }

  inc = () =>{
    this.setState({
      value: this.state.value + 1,
    })
  }

  dec = () =>{
    this.setState({
      value: this.state.value -1,
    })
  }

  random(){
    console.log(this)
  }

  render(){
    const {value} = this.state
    const {name} = this.props
    return(
      <div className="App">
        <h1 className="App-title">Counter</h1>
        <p>{name}</p>
          <p className="App-intro">{value}</p>
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
      </div>
    )
  }
}

export default Counter;
