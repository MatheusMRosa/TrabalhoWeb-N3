import React from 'react';

const ListToDo = props => {
    const {list, alterStatusToDo} = props;
    return (
        <div>
            <div>
                {list.map((item, index) =>
                    <div key={index}>
                        <div>{item.name}</div>
                        <div><input type="checkbox"/></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListToDo;