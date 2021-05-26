import {getGifs} from '../helpers/getGifs';
import {useEffect, useState} from 'react';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                setTimeout(() => {
                    
                    setState({
                        data: imgs,
                        loading: false
                    });

                }, 3000);

        });

    }, [category]);

    return state;

}
