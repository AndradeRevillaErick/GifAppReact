import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>', () => {

    test('must to match with snapshot', () => {

        // const props = {
        //     title: 'Este es el titulo',
        //     url: 'Esta es la URL'
        // }

        // const { container } = render( <GifItem { ...props }/>);

        const title = 'Dragon ball';
        const url   = 'https://dragon-ball.com/goku.jpg';

        const { container } = render( <GifItem title={ title } url={ url }/>);

        expect( container ).toMatchSnapshot();
    });
})