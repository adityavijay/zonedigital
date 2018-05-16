import {actions, visibilityFilters} from './DataListActions'

const initialState = {
    dataLists:[{listUsers:[], listName:''}],
    visibilityFilter:visibilityFilters.showAll
}

export default function (state= initialState, action){
    switch(action.type){
        case actions.addDataList:
        return {...state, dataLists: state.dataLists.concat([action.payLoad])};

        case actions.setVisibilityFilter:
        return {...state, visibilityFilter: action.filter}

        default: return state;
    }
}