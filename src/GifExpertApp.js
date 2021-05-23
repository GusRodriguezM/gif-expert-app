import React, {useState} from 'react';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        setCategories(categories => [...categories, 'Demon Slayer']);
    }

    return (
        <>
            <h2>Gif Expert App</h2>
            <hr/>

            <button onClick={handleAdd}>Agregar</button>

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