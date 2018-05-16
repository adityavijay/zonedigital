import {actions} from './DataListActions'

const initialState = {
    dataLists:[{listUsers:[], listName:''}],
    filters:['ShowAll'],
    visibilityFilter:'ShowAll'
}

export default function (state= initialState, action){
    switch(action.type){
        case actions.addDataList:
          return {...state, 
            filters: state.filters.concat([`Show${action.payLoad.listName}`]),
            dataLists: state.dataLists.concat([action.payLoad])};

        case actions.setVisibilityFilter:
          return {...state, visibilityFilter: action.filter}

        default: return state;
    }
}