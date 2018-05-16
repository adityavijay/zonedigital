import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import reducer from './DataList/DataListReducer';

const store = createStore(reducer, applyMiddleware(logger));

export default ({children})=>{
	return (
			<Provider store={store}>
				{children}
			</Provider>
		);
}	
