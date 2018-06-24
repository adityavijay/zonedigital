
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import React from 'react';
import './animation.css';

export class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {items: ['hello', 'world', 'click', 'me']};
      this.handleAdd = this.handleAdd.bind(this);
    }
  
    handleAdd() {
      const newItems = this.state.items.concat([
        prompt('Enter some text')
      ]);
      this.setState({items: newItems});
    }
  
    handleRemove(i) {
      let newItems = this.state.items.slice();
      newItems.splice(i, 1);
      this.setState({items: newItems});
    }
  
    render() {
      
  
      return (
        <div>
          <button onClick={this.handleAdd}>Add Item</button>
          
            <Items items = {this.state.items} parObj={this}/>
            
        
        </div>
      );
    }
  }

  const Items = ({items, parObj})=>{
    return <ReactCSSTransitionGroup
    transitionName="example"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}>{items.map((item, i) => (
        <div key={item} onClick={() => parObj. handleRemove(i)}>
          {item}
        </div>
      ))} 
      </ReactCSSTransitionGroup>
  }