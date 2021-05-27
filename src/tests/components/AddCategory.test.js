import React from 'react';
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Tests in <AddCategory/>', () => {

    const setCategories = () => {};
   
    test('Should render <AddCategory/> correctly', () => {
       
        const wrapper = shallow(<AddCategory setCategories={setCategories}/>);
        expect(wrapper).toMatchSnapshot();
        
    });
    
});