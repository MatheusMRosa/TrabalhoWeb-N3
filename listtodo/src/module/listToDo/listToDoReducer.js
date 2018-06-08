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
            for (let item of state.copyList) {
                if (item.name === payload.name) {
                    return {...state, someName: true}
                }
            }
            return {...state, list: [...state.list, payload], copyList: [...state.copyList, payload], someName: false};
        case ALTER_STATUS_TO_DO:
            for (let i in state.copyList) {
                if (state.copyList[i].name === payload.item.name) {
                    state.copyList[i].finish = payload.status
                }
            }
            return {...state, copyList: [...state.copyList]};
        case DELETE_TO_DO:
            for (let i in state.copyList) {
                if (state.copyList[i].name === payload.name) {
                    state.copyList.splice(i, 1);
                }
            }
            return {...state, copyList: [...state.copyList]};
        default :
            return state;
    }
}