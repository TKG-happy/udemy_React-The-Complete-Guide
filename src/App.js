import React, { Component } from 'react';
// import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

// // 関数コンポーネントでの書き方
// const App = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {name: 'A', age: 10},
//       {name: 'B', age: 20},
//       {name: 'C', age: 30}
//     ]
//   });

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         {name: 'AA', age: 101},
//         {name: 'B', age: 202},
//         {name: 'CC', age: 30}
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm React App</h1>
//       <p>Hello</p>
//       <button onClick={switchNameHandler}>Switch name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// };


// クラスコンポーネントでの書き方
class App extends Component {
  state = {
    persons: [
      {name: 'A', age: 10},
      {name: 'B', age: 20},
      {name: 'C', age: 30}
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 101},
        {name: 'B', age: 202},
        {name: 'CC', age: 30}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'A', age: 10},
        {name: event.target.value, age: 20},
        {name: 'C', age: 30}
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>Hello</p>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'AA')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler('AAA')}
          changed={this.nameChangedHandler}
        >
          My hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
