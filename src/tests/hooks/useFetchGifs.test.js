import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('Tests in the useFetchGifs custom hook', () => {
   
    test('should return the initial state', () => {

        const {result} = renderHook(() => useFetchGifs('One Punch Man'));
        const {data, loading} = result.current;

        expect(data.length).toBe(0);
        expect(loading).toBeTruthy();
        
    });
    
    
});