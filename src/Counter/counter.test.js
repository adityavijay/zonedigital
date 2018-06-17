import React from 'react';
import {Counter} from "./counter";
import {mount, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Counter testing', ()=>{
    test('renders 1 component', ()=>{
        const comp  = shallow(<Counter/>);
        expect(comp).toHaveLength(1);
    });

    test('it renders props correctly',()=>{
        const comp  = shallow(<Counter name="adityaCounter"/>);
        expect(comp.instance().props.name).toBe('adityaCounter');
    });

    test('renders one button',()=>{
        const comp = mount(<Counter/>);
        const button  = comp.find('button');
        expect(button.length).toBe(1);
    });

   

    test(' it increments counter on click',()=>{
        const comp = shallow(<Counter/>);
        const button  = comp.find('button');
        button.simulate('click');
        button.simulate('click');
        console.log(comp.instance().state.counter);
        expect(comp.instance().state.counter).toBe(2);
    })
});
