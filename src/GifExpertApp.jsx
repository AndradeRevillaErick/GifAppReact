import { useState } from "react"
import { AddCategory } from "./components/AddCategories";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch Man' ]);
    // const [categories, setCategories] = useState('Naruto');

    const onAddCategory = ( newCategory ) => {
        // setCategories(categories.concat('halo'));//una opcion para aumentar el arreglo
        if( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);//otra opcion para agregar al arreglo
        // setCategories(categories.push('halo'));//no se puede hacer asi
        
        // categories.push( newCategory );
        // console.log(categories);

    }

    return(
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            < AddCategory 
                onNewCategory = { ( value ) => onAddCategory( value ) }
            />

            {
                categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }   
        </>
    )
}