import React from 'react';

const ListToDo = props => {
    const {list, alterStatusToDo, deleteToDo} = props;
    return (
        <div className="container">
            {list.map((item, index) =>
                <div key={index} className="row">
                    <div>{item.name}</div>
                    <div>
                        {item.finish ?
                            <div>
                                <button onClick={() => alterStatusToDo(item, false)}>Reopen</button>
                                <button onClick={() => deleteToDo(item)}>Delete</button>
                            </div>
                            :
                            <button onClick={() => alterStatusToDo(item, true)}>Finish</button>
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListToDo;