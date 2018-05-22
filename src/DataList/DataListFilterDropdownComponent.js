import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
            this.props.filters.map((val, key)=><option key={key}>{val}</option>)
        }
    </select>);
  }
}  

FilterDropdown.propTypes = {filters: PropTypes.array.isRequired,
  changeFilterTo: PropTypes.func.isRequired
}