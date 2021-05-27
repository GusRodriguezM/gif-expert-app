import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Tests in <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });
   
    test('Should render <AddCategory/> correctly', () => {
       
        expect(wrapper).toMatchSnapshot();
        
    });

    test('should simulate the change in the input text', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        
        input.simulate('change', {target: {value}});

        expect(wrapper.find('p').text().trim()).toBe(value);

    });

    test('shouldn\'t post the information with the submit', () => {
       
        wrapper.find('form').simulate('submit', { preventDefault(){ } });

        expect(setCategories).not.toHaveBeenCalled();
        
    });
    
});