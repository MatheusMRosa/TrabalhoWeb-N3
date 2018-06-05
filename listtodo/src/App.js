import React, {Component} from 'react';
import './App.css';
import AddNewTodo from './module/addNewToDo/addNewToDo';
import ListToDo from './module/listToDo/listToDo';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AddNewTodo/>
                <ListToDo/>
            </div>
        );
    }
}

export default App;
