import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './DataList/DataListReducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default ({children})=>{
	return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}	
