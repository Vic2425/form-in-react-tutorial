import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: ''
    }
    // add this line using bind() under this.state 
    // this.handleChange = this.handleChange.bind(this)
  }

  // one way to write handleChange using ES6 syntax
  handleChange = (e) => {
    this.setState({
      // firstNam: e.target.value --> only effect for firstName input
      // using e.target.name --> name is attribute from input that assigned, 
      // therefore no need of repeating the same func for another input
      [e.target.name]: e.target.value
    })
  }

  // another way to write handleChange with .bind()
  // handleChange(e) { codes same as above } 

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state.firstNam)

    axios.post('http://localhost:4001/users', {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({
        firstName: '',
        lastName: ''
    }) 
  }

  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <p> My Form in React</p>
          <form onSubmit={(e) => {this.handleSubmit(e)}}>
            <input 
              type='text' name="firstName"
              value={this.state.firstName}
              onChange={(e) => {this.handleChange(e)}}> 
            </input>
            <input 
              type='text' name="lastName"
              value={this.state.lastName}
              onChange={(e) => {this.handleChange(e)}}> 
            </input>
            <input type='submit'></input>
          </form>
        </header>
        
      </div>
    );
  }
}

export default App;
