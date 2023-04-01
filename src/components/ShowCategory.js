import React from 'react';
import { GifItem } from '../components/GifItem';
import { useFetchGifs } from '../CustomHooks/useFetchGifs';

export const ShowCategory = ({ category }) => {
    const {images, isLoading} = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && <h1>CARGANDO...</h1>
            }

            <div className='card-grid'>
                {
                    images.map(image => (
                       <GifItem
                        key={image.id}
                        {...image}
                       />
                    ))
                }
            </div>
        </>
    )
}
