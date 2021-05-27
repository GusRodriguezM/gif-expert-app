import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom'
import GifExpertApp from "../GifExpertApp";

describe('Tests in <GifExpertApp/> component', () => {
   
    test('should render <GifExpertApp/> component correctly', () => {
       
        const wrapper = shallow(<GifExpertApp/>);
        
        expect(wrapper).toMatchSnapshot();
        
    });

    test('should render a list of categories', () => {
       
        const categories = ['One Punch Man', 'Dragon Ball'];

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
        
    });
    
});