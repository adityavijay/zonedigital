import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import {visibilityFilters, addDataList, setVisibilityFilter} from './DataListActions'
import {FilterDropdown} from './DataListFilterDropdownComponent';
import {ListItem} from './DataListItemComponent';

class ListContainer extends Component{
    componentWillMount(){

    }
    render(){
        console.log(this.props.dataLists);
        return (<div><FilterDropdown changeFilterTo = {this.props.changeFilterTo}/><ul>{
            this.props.dataLists.map((list)=>list.listUsers.map((val, key)=><ListItem key={key} item={val}/>))
            }</ul>
            </div>);
    }
}
//{dataLists:[{listUsers, listName},{listUsers, listName}], }
const filterDataList = (state)=>state.dataLists.filter((listData)=>{
    switch(state.visibilityFilter){
        case visibilityFilters.showListA:
            return listData.listName == 'A';
        
        case visibilityFilters.showListB:
            return listData.listName == 'B';
        
        default: return true;
    }
});

export default connect((state)=>({dataLists:filterDataList(state)}),
(dispatch)=>({changeFilterTo:(filter)=>
    dispatch(setVisibilityFilter(filter))}))
(ListContainer);