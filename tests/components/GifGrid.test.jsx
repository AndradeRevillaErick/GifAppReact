import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid>/', () => { 
    
    const category = 'One Puch';

    test('Shlould show the loading text', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category = { category }/> );
        expect( screen.getByText( 'Cargando...' ) ); //no se muestra el texto pero o l ohace muy rapido
        expect( screen.getByText( category ) );

    });

    test('Should show items when images have been loading', () => {

        const gifs = [
            {
                id: 'JAV',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'KJL',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } />);
        expect( screen.getAllByRole('img').length ).toBe(2);

    });
 })