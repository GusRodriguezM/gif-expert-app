import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Tests in <GrifGridItem/>', () => {
   
    const title = 'Justa generic title';
    const url = 'https://localhost:3000/someImage.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    
    test('Should render <GrifGridItem/> correctly', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('should have a paragraph with the title', () => {
       
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    });
    
    test('the value of src and alt prop should be equal to the passed props', () => {
        
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

    test('should have css class animate__fadeInLeftBig', () => {
        
        const animationClass = 'animate__fadeInLeftBig';
        const div = wrapper.find('div');
        expect(div.prop('className').includes(animationClass)).toBe(true);
        
    });
    
});