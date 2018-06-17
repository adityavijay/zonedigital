import React, { Component } from 'react';
import StoreProvider from './store';
import ListContainer from './DataList/DataListContainer';
import {Counter} from './Counter/counter';
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
          <ListContainer/>
          <Counter/>
        </div>
      </StoreProvider>
    );
  }
}

export default App;
