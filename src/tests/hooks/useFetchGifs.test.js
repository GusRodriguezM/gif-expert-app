import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('Tests in the useFetchGifs custom hook', () => {
   
    test('should return the initial state', async() => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch Man'));
        const {data, loading} = result.current;

        await waitForNextUpdate();
        expect(data.length).toBe(0);
        expect(loading).toBeTruthy();
        
    });
    
    test('should return an array of images and set loading to false', async () => {
       
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch Man'));
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBeFalsy();
        
    });
    
    
});