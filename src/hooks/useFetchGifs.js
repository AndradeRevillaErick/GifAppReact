import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, []);


    //otra opcion para llamar el servicio y obtener los gifs, al parecer es muy rapida y no da tiempo de que se muestre el mensaje de cargando y es un problema con los tests
    // useEffect( () => {
    //     getGifs( category )
    //         .then( newImages => setImages(newImages),
    //                 setIsLoading(false));
    // }, [])

    return {
        images,
        isLoading
    }
}