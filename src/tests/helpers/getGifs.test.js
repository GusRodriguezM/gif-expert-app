import { getGifs } from "../../helpers/getGifs";

describe('Tests with getGifs fetch', () => {
    
    test('should retrieve 10 elements', async() => {
        
        const gifs = await getGifs('Dragon Ball');
        expect(gifs.length).toBe(10);

    });

    test('shouldn\'t retrieve elements', async() => {
       
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
        
    });
        
});