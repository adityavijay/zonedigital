import React, {Component} from 'react';
import "./showHide.css";
export class ShowHide extends Component{
    constructor(props){
        super(props);
        this.state = {show: true}
    }
    componentDidMount(){
        console.log(this.refs);
    }

    shouldComponentUpdate(props, state){        
        return true;
    }

    componentWillUpdate(nProps, nState){
        //no setState
        if(!nState.show){
            this.refs.BT.refs.elem.style.opacity = 1;
        }
        else{
            this.refs.BT.refs.elem.style.opacity = 0;
        }
    }

    componentDidUpdate(preProps, prevSt){
        if(this.state.show){
            this.refs.BT.refs.elem.style.opacity = 1;
        }
        else{
            this.refs.BT.refs.elem.style.opacity = 0;
        }
    }
    render(){
        const className = this.state.show?"showHideEle show":"showHideEle";
        return <div ref="mydom">
           <button onClick={()=>this.setState({show: !this.state.show})}>onClick</button>
           <ButtonText ref="BT" className={className}/>
           <ButtonText1 ref="BT1" className={className}/>
        </div>
    }
}


class ButtonText extends Component{
    componentWillReceiveProps(nProps,nState){
        this.setState({st:nProps});//ok setState
    }
    shouldComponentUpdate(){
        return true; //no setState
    }
    componentWillUpdate(nProps, nState){
        //no setState
       const x = 34;
    }

    componentDidUpdate(preProps, prevSt){
        const x = 34;
    }

    render(){
        return <div className={this.props.className} ref="elem">Show</div>    
    }
}

class ButtonText1 extends Component{
    componentWillReceiveProps(nProps,nState){
        this.setState({st:nProps});//ok setState
    }
    shouldComponentUpdate(){
        return true; //no setState
    }
    componentWillUpdate(nProps, nState){
        //no setState
       const x = 34;
    }

    componentDidUpdate(preProps, prevSt){
        const x = 34;
    }

    render(){
        return <div className={this.props.className}>Show1</div>    
    }
}

class Mock extends Component{
    constructor(props){
        super(props);
        this.triggerLink = this.triggerLink;
    }
    triggerLink(){console.log(333);}
    render(){
        return <div ref="test1">Hello ShowHide</div>
    }
}