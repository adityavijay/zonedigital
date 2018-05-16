import React, { Component } from 'react';
import StoreProvider from './store';
import ListContainer from './DataList/DataListContainer';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <StoreProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Data List Merge and Filtering</h1>
          </header>
          <ListContainer/>
        </div>
      </StoreProvider>
    );
  }
}

export default App;
