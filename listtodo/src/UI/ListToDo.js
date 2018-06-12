import React from 'react';

const ListToDo = props => {
    const {list, alterStatusToDo, deleteToDo} = props;
    return (
        <div className="container" style={{marginTop: 25}}>
            <div className="table table-active">
                {list.length > 0 ?
                    <div className="row">
                        <div className="col"><h5 className="shadow p-3 bg-dark rounded" style={{color: 'white'}}>
                        # Name of To Do</h5></div>
                    </div>
                    :
                    <small className="form-text text-muted">No to do Found</small>
                }
                {list.map((item, index) =>
                    <div className="row" key={index}>
                        <div className="col">- {item.name}</div>
                        <div className="w-50"/>
                        <div className="col">
                            {item.finish ?
                                <div>
                                    <button onClick={() => alterStatusToDo(item, false)}
                                            className="btn btn-outline-primary">Reopen
                                    </button>
                                    <button onClick={() => deleteToDo(item)} className="btn btn-outline-danger">Delete
                                    </button>
                                </div>
                                :
                                <button onClick={() => alterStatusToDo(item, true)} className="btn btn-success">
                                    finalize
                                </button>
                            }
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListToDo;