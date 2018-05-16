import axios from 'axios';


export const actions = {addDataList:'AddDataList', setVisibilityFilter:'SetVisibilityFilter'}

export const addDataList = (dataList)=>({type:actions.addDataList, payLoad: dataList});
export const setVisibilityFilter = (filter)=>({type:actions.setVisibilityFilter, filter});


export const createDataList = (users, listName)=>{
  const userNames = users.map((user)=>`${user.first_name} ${user.last_name}`);
  return {listUsers:userNames, listName}
}


export const fetchDataList = (url, listName)=>(dispatch)=>{
  axios.get(url).
  then((res)=>res.data.data).
  then((users)=>createDataList(users, listName)).
  then((dataList)=>dispatch(addDataList(dataList)));
}