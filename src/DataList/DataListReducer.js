import {actions} from './DataListActions'

const initialState = {
    dataLists:[{listUsers:[], listName:''}],
    filters:['ShowAll'],
    visibilityFilter:'ShowAll',
    fetching: true,
    fetchError:""
}

export default function (state= initialState, action){
  switch(action.type){
    case actions.addDataList:
      return {...state, 
        filters: state.filters.concat([`Show${action.payLoad.listName}`]),
        dataLists: state.dataLists.concat([action.payLoad]),
        fetching: false
      };

    case actions.setVisibilityFilter:
      return {...state, visibilityFilter: action.filter};

    case actions.fetching:
      return {...state, fetching:true};
    
    case actions.fetchError:
      return {...state, fetching:false, 
        fetchError:`${state.fetchError} \n ${action.error}`};

    default: return state;
  }
}