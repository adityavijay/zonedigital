import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {visibilityFilters} from './DataListActions';

export class FilterDropdown extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.changeFilterTo(e.target.value);
    }
    render(){
        return (<select onChange = {this.handleChange}>
            {
                Object.values(visibilityFilters).map((val, key)=><option key={key}>{val}</option>)
            }
        </select>);
    }
}     