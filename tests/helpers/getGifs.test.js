import { getGifs } from "../../src/helpers/getGifs";

describe('pruebas en get gifs()', () => {

    test('SHould return an array with gifs', async() => {
        
        const gifs = await getGifs('Goku');
        
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
    });
});