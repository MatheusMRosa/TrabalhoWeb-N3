import {ADD_NEW_TO_DO} from '../addNewToDo/addNewToDoActions';
import {ALTER_STATUS_TO_DO, DELETE_TO_DO} from './listToDoActions';

const DEFAULT_STATE = {
    list: [],
    copyList: [],
    someName: false
};

export default (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case ADD_NEW_TO_DO:
            if (state.copyList.find(item => item.name === payload.name)){
                return {...state, someName: true}
            }
            return {...state, list: [...state.list, payload], copyList: [...state.copyList, payload], someName: false};
        case ALTER_STATUS_TO_DO:
            return {...state, copyList: state.copyList.map(item => item.name === payload.item.name ?{...item, finish: payload.status} : item)};
        case DELETE_TO_DO:
            return {...state, copyList: state.copyList.filter(item => item.name !== payload.name)};
        default :
            return state;
    }
}