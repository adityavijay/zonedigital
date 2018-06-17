import React from 'react';

export class Counter extends React.Component{
    constructor(){
        super();
        this.state = {counter:0};
        this.increment = this.increment.bind(this);  
    }

    increment(){
        this.setState({counter: this.state.counter+1});
    }
    render(){
        return(<div>Counter is Here
            <p>{this.state.counter}</p>
            <button onClick={this.increment}>Do Increment</button>
        </div>);
    }
}