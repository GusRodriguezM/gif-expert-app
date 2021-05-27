import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Tests in <GrifGridItem/>', () => {
   
    const title = 'Justa generic title';
    const url = 'https://localhost:3000/someImage.jpg';

    
    test('Should render <GrifGridItem/> correctly', () => {

        const wrapper = shallow(<GifGridItem title={title} url={url}/>);
        expect(wrapper).toMatchSnapshot();

    });
    
});

