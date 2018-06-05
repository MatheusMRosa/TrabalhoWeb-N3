import React, { Component } from 'react';
import './App.css';
import AddNewTodo from './UI/addNewToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddNewTodo />
      </div>
    );
  }
}

export default App;
