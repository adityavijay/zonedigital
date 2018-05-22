import React from 'react';
import DataListContainer from './DataListContainer';
import StoreProvider from '../store';
import renderer from 'react-test-renderer';

describe('Data List renderer',()=>{
  it('renders correctly', ()=>{
    const tree = renderer.create(<StoreProvider><DataListContainer/></StoreProvider>).toJSON;
    expect(tree).toMatchSnapshot();
  })
})