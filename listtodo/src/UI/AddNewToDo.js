import React from 'react';
import {Field} from 'redux-form';

const AddNewToDo = props => {
    const {addNewToDo, handleSubmit} = props;
    const submit = (value) => {
        addNewToDo(value);
    };
    return(
        <div>
            <Field type="text" name="name" label="To do ..." component="input" />
            <button onClick={handleSubmit(submit)}>OK</button>
        </div>
    );
};

export default AddNewToDo;
