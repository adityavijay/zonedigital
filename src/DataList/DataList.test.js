import React from 'react';
import DataListContainer from './DataListContainer';
import StoreProvider from '../store';
import renderer from 'react-test-renderer';
import getUser from './user';
/*
describe('Data List renderer',()=>{
  it('renders correctly', ()=>{
    const tree = renderer.create(<StoreProvider><DataListContainer/></StoreProvider>).toJSON;
    expect(tree).toMatchSnapshot();
  })
});*/

beforeAll(()=>console.log('hello beforeAll'));
afterAll(()=>console.log('hello afterall'));
describe('testings',()=>{
  test('should be truthy',()=>{
    expect(true).toBeTruthy();
  })
});



test('testing mock', ()=>{
  function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }
  
  const mockCalls = jest.fn();
  forEach([0,1], mockCalls);
  //console.log(jest);
 expect(mockCalls.mock.calls.length).toBe(2);
});


jest.mock('./request');
test('async test',()=>{
  getUser(4).then((name)=>expect(name).toMatch('Mark'));
})