import {ADD_NEW_TO_DO} from '../addNewToDo/addNewToDoActions';
import {ALTER_STATUS_TO_DO, DELETE_TO_DO} from './listToDoActions';

const DEFAULT_STATE = {
    list: [],
    someName: false
};

export default (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case ADD_NEW_TO_DO:
            for (let item of state.list) {
                if (item.name === payload.name){
                    return {...state, someName: true}
                }
            }
            return {...state, list: [...state.list, payload], someName: false};
        case ALTER_STATUS_TO_DO:
            for (let i in state.list){
               if (state.list[i].name === payload.item.name){
                   state.list[i].finish = payload.status
               }
            }
            return {...state, list: [...state.list]};
        case DELETE_TO_DO:
            for (let i in state.list){
                if (state.list[i].name === payload.name){
                    state.list.splice(i, 1);
                }
            }
            return {...state, list: [...state.list]};
        default :
            return state;
    }
}