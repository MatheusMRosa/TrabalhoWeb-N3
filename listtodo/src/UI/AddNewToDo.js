import React from 'react';
import {Field} from 'redux-form';

const AddNewToDo = props => {
    const {addNewToDo, handleSubmit, someName} = props;
    const submit = (value) => {
        addNewToDo(value);
    };
    return (
        <div>
            <Field type="text" name="name" label="To do ..." component="input"/>
            <button onClick={handleSubmit(submit)}>OK</button>
            {someName ?
                <label>Por Favor insira uma nova tarefa, com nome diferente</label>
                :
                null
            }
        </div>
    );
};

export default AddNewToDo;
