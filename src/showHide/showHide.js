import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
    }

    componentDidUpdate(preProps, prevSt){

    }
    componentWillEnter(){
        const x=34;
    }
    componentDidEnter(){
        const x=34;
    }
    componentWillLeave(){
        const x=34;
    }
    componentDidLeave(){
        const x=34;
    }

    render(){
        const className = this.state.show?"showHideEle show":"showHideEle";
        return <div><ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
        
          >
           <button onClick={()=>this.setState({show: !this.state.show})}>onClick</button>
           <ButtonText  show={this.state.show} className={className}/>
           <ButtonText1  className={className}/>
          
        </ReactCSSTransitionGroup>
           
        </div>
    }
}


class ButtonText extends Component{
    
    componentWillEnter(){
        const x=34;
    }
    componentDidEnter(){
        const x=34;
    }
    componentWillLeave(){
        const x=34;
    }
    componentDidLeave(){
        const x=34;
    }
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
        return this.props.show?<div className={this.props.className} ref="elem">Show</div>:null;    
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