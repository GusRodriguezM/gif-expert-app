import React, {useEffect} from 'react';

const GifGrid = ({category}) => {

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=xzHdGrQXHRj14LP2GM7YF0eUh3z1Rcwq';
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
    }

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}

export default GifGrid;