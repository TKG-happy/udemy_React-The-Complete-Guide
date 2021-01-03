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
      {id: 1, name: 'A', age: 10},
      {id: 2, name: 'B', age: 20},
      {id: 3, name: 'C', age: 30}
    ],
    showPersons: false
  };

  // <input>に文字(名前)を入力した際に<p>内の文字(名前)を変更する処理
  nameChangedHandler = (event, id) => {
    // onChangeした場所のインデックス番号を取得
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  // clickしたPersonコンポーネントを画面から削除する処理
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  // Toggle PersonsボタンをclickしたときにstateのshowPersonsプロパティの値を切り替える処理
  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // stateのshowPersonsプロパティの値によってPersonコンポーネント群の表示非表示を切り替える処理(Toggle Personsボタンに関係する)
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>Hello</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
