import fetch from 'node-fetch';

const createDataList = (users, listName)=>{
  const userNames = users.map((user)=>`${user.first_name} ${user.last_name}`);
  return {listUsers:userNames, listName}
}

export const actions = {addDataList:'AddDataList',
  setVisibilityFilter:'SetVisibilityFilter', 
  fetching:'fetching',
  fetchError:'FetchError'
}

export const addDataList = (dataList)=>({type:actions.addDataList, payLoad: dataList});
export const setVisibilityFilter = (filter)=>({type:actions.setVisibilityFilter, filter});
export const fetchRequest = ()=>({type:actions.fetching});
export const fetchError = (error)=>({type:actions.fetchError, error});
export const fetchDataList = (url, listName)=>(dispatch)=>{
  dispatch(fetchRequest());
  return fetch(url).then((res)=>res.json()
  ).then((json)=>json.data).then(
    (users)=>createDataList(users,
     listName)).then(
       (dataList)=>dispatch(addDataList(dataList))
    ).catch((err)=>{
      dispatch(fetchError(err.message))
    });
  }
