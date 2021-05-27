import React from 'react';
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Tests in <AddCategory/>', () => {

    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>);
   
    test('Should render <AddCategory/> correctly', () => {
       
        expect(wrapper).toMatchSnapshot();
        
    });

    test('should simulate the change in the input text', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        
        input.simulate('change', {target: {value}});

        expect(wrapper.find('p').text().trim()).toBe(value);

    });
    
    
});