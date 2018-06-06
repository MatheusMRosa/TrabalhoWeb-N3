import React from 'react';
import {Field} from 'redux-form';

const AddNewToDo = props => {
    const {addNewToDo, handleSubmit, someName} = props;
    const submit = (value) => {
        addNewToDo(value);
    };
    return (
        <div className="container" style={{marginTop: 25}}>
            <div className="form-inline">
                <div className="form-group mb-2">
                    <label className="form-control-plaintext">Write a title for your "TODO"</label>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <Field type="text" name="name" label="To do ..." component="input" className="form-control"/>
                </div>
                <button onClick={handleSubmit(submit)} className="btn btn-primary mb-2">save</button>
            </div>
            {someName ?
                <div className="form-group">
                    <strong className="form-text alert-danger alert alert-heading">
                        Name already in use, please choose other name
                    </strong>
                </div>
                :
                null
            }
        </div>
    );
};

export default AddNewToDo;
