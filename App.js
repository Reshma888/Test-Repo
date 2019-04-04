import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data:" ",
    }
    this.displayMessage = this.displayMessage.bind(this)
  };
  displayMessage(){
    const date = new Date();
    const hour = date.getHours();
    const username = "Reshma"
    if (hour < 12){
      this.setState({data: ` Good Morning ${username} `})
    }else if  (hour < 18){
      this.setState({data: `Good Afternoon ${username}`})
    }else {
      this.setState({data: `Goodevening ${username}`})
    }

  }
  render () {
    return (
      <div className="App">
      <Button onClick = {this.displayMessage}>click</Button>
      <h1>{this.state.data}</h1>
      </div>
    );
  }

  }

export default App;
