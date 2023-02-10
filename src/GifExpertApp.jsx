import { useState } from "react"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch Man', 'Naruto']);
    // const [categories, setCategories] = useState('Naruto');

    const onAddCategory = () => {
        // setCategories(categories.concat('halo'));//una opcion para aumentar el arreglo
        setCategories([ ...categories, 'Halo' ]);//otra opcion para agregar al arreglo
        // setCategories(categories.push('halo'));//no se puede hacer asi

    }

    return(
        <>
            <h1>GifExpertApp</h1>

            <button onClick={onAddCategory}>Agregar</button>

            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }> { category } </li>
                    })
                }
            </ol>
        </>
    )
}