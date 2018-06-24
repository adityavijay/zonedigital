import React, { Component } from 'react';
import StoreProvider from './store';
import ListContainer from './DataList/DataListContainer';
import {Counter} from './Counter/counter';
import {ShowHide} from './showHide/showHide';
import {TodoList} from './Animation/todoAnimation';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <StoreProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Data merge and filtering</h1>
          </header>
          <ListContainer ad="asd"/>
          <Counter/>
          <ShowHide/>
          <TodoList/>
        </div>
      </StoreProvider>
    );
  }
}

export default App;
