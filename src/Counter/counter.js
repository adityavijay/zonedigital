import React from 'react';
import DOM from 'react-dom';

export class Counter extends React.Component{
    constructor(){
        super();
        this.state = {counter:0};
    }

    increment(e){
        console.log(this);
        console.log(DOM.findDOMNode(this.refs.but));
        console.log(e.currentTarget);
        this.setState({counter: this.state.counter+1});
    }
    render(){
        return(<div>Counter is Here
            <p>{this.state.counter}</p>
            <button onClick={(e)=>this.increment(e)} ref="but">Do Increment</button>
        </div>);
    }
}