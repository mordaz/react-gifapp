//rafc + TAB crea el esquema estandar de un componente

//importamos useState para generar variables hooks
//importamos useEffect para ejecutar funciones de manera condicial
import React from 'react'

import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {

    //usamos nuestro custom hook destructurando el objeto que regresa data[],loading}
    const { imagenes, loading} = useFetchGifs( categoria );

    //devolvemos un nuevo componente al que enviamos la imagen
    //enviamos todas las propiedades como un props al nuevo componente
    //usando nuestro custom hook enviaremos la informacion de carga 
    //que se actualizara automaticamente al hacer set al custom hook
    return (
        <>
        <h3>{ categoria }</h3>
        { loading ? <p>Cargando...</p> : null}
        <div className="card-grid">
            {
                imagenes.map( imagen => (
                    <GifGridItem 
                    key={ imagen.id } 
                    { ...imagen } 
                    />
                ))
            }
        </div>
        </>
    )
}
