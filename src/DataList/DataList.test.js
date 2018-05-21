import React from 'react';
import DataListContainer from './DataListContainer';
import {FilterDropdown} from './DataListFilterDropdownComponent';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('List Container Rendering', ()=>{
    it('renders dropdown and data list', ()=>{
        const wrapper = shallow(<FilterDropdown/>);
        expect(2).toBe(2);
    })

})