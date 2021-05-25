import React, {useState} from 'react';
import AddCategory from './Components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        setCategories(categories => [...categories, 'Demon Slayer']);
    }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory/>
            <button onClick={handleAdd}>Agregar</button>
            <hr/>

            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;