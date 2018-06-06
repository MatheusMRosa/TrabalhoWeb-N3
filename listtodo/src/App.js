import React, {Component} from 'react';
import AddNewTodo from './module/addNewToDo/addNewToDo';
import ListToDo from './module/listToDo/listToDo';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div>
                <AddNewTodo/>
                <ListToDo/>
            </div>
        );
    }
}

export default App;
