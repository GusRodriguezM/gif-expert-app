import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Tests in <GrifGridItem/>', () => {
   
    let wrapper = shallow(<GifGridItem/>);

    
    test('Should show <GrifGridItem/> correctly', () => {

        expect(wrapper).toMatchSnapshot();

    });
    
});

