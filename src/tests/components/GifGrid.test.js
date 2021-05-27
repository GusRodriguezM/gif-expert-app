import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests in <GifGrid/> component', () => {

    const category = 'Dragon Ball';
   
    test('Should render <GrifGrid/> correctly', () => {
       
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();

    });
    
    test('Should render items when images are loaded with useFetchGifs custom hook ', () => {

        const gifs = [{
            id: 'ABC123',
            url: 'https://localhost/any/gif',
            title: 'Any Gif'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();

    });
    
    
});
