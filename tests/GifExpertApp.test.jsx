import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp/>', () => { 
    
    test('Should match with sanpShoot', () => {

        const { container } = render( <GifExpertApp/>);

        expect( container ).toMatchSnapshot();
    });
 })