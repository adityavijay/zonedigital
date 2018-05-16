export const visibilityFilters = {
  showAll: 'ShowAll',
  showListA: 'ShowListA',
  showListB: 'ShowListB'
}

export const actions = {addDataList:'AddDataList', setVisibilityFilter:'SetVisibilityFilter'}

export const addDataList = (dataList)=>({type:actions.addDataList, payLoad: dataList});
export const setVisibilityFilter = (filter)=>({type:actions.setVisibilityFilter, filter});