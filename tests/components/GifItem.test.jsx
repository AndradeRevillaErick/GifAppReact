import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>', () => {

    const title = 'Dragon ball';
    const url   = 'https://dragon-ball.com/goku.jpg';

    test('must to match with snapshot', () => {

        // const props = {
        //     title: 'Este es el titulo',
        //     url: 'Esta es la URL'
        // }

        // const { container } = render( <GifItem { ...props }/>);

        const { container } = render( <GifItem title={ title } url={ url }/>);

        expect( container ).toMatchSnapshot();
    });

    test('should show the image with the URL and ALT indicated', () => {
        
        render( <GifItem title={ title } url={ url }/>);

        //first option to validate this point
        // expect( screen.getByRole('img').src).toBe( url );
        // expect( screen.getByRole('img').alt).toBe( title );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('Should show the title', () => {

        render( <GifItem title={ title } url={ url }/>);

        expect(screen.getByText( title )).toBeTruthy();
    });
})