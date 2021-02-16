import React from 'react'

//recibimos en las props todas las propiedes de la imagen y las destructuramos
export const GifGridItem = ( {id, title, url} ) => {

    return (
        <div className="card animate__animated animate__backInUp">
            <img src={ url } alt={ title }/>
            <p>{ title }</p>
        </div>
    )
}