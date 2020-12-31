import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'A', age: 10},
      {name: 'B', age: 20},
      {name: 'C', age: 30}
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'AA', age: 101},
        {name: 'B', age: 202},
        {name: 'CC', age: 30}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>Hello</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
