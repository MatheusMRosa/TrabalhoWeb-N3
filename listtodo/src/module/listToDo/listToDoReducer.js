import {ADD_NEW_TO_DO} from '../addNewToDo/addNewToDoActions';
import {ALTER_STATUS_TO_DO} from './listToDoActions';

const DEFAULT_STATE = {
    list: []
};

export default (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case ADD_NEW_TO_DO:
            return {...state, list: [...state.list, payload]};
        case ALTER_STATUS_TO_DO:
            return {...state, list: [...state.list, {'finish': payload}]};
        default :
            return state;
    }
}