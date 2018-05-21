import fetch from 'node-fetch';


export const actions = {addDataList:'AddDataList', setVisibilityFilter:'SetVisibilityFilter'}

export const addDataList = (dataList)=>({type:actions.addDataList, payLoad: dataList});
export const setVisibilityFilter = (filter)=>({type:actions.setVisibilityFilter, filter});


export const createDataList = (users, listName)=>{
  const userNames = users.map((user)=>`${user.first_name} ${user.last_name}`);
  return {listUsers:userNames, listName}
}


export const fetchDataList = (url, listName)=>(dispatch)=>{
  fetch(url).then((res)=>res.json()
  ).then((json)=>json.data).then(
    (users)=>createDataList(users,
     listName)).then((dataList)=>dispatch(addDataList(dataList))
    );
}