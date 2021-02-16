//CREAMOS UN CUSTOM HOOK 
//La diferencia entre un hook y un functional component es que no regresamos 
//nada en JSX <h1>Hello, {name}</h1>; JSX son elementos HTML con javascript
//por lo tanto no necesitamos importar react
//funcionan igual que los functional componentes 

import { useState, useEffect } from "react"

import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( categoria ) =>{
    //creamos un estado para indicarle a otros componentes cuando se debe
    //renderizar porque algo cambio en este caso vamos a cargar en la
    //variable loading true para indicar cuando se ejecute 
    //y cuando termine de cargar cambiaremos a false
    const [estado, setEstado] = useState({
        imagenes: [],
        loading: true
    });

    //usando useEffects condicionaremos la ejecucion de obtencion de Gifs
    //solo se dispara una vez al invocar el componente
    //el segundo parametro es una lista de dependencias en este caso
    //se manda la categoria porque la funcion contiene el uso de la misma
    useEffect( () => {
        //la funcion getGifs() se encuentra en helpers y son funciones 
        //de ayuda a los componentes que no estan dentro del componente
        //como es una funcion promesa se usa .then 
        getGifs(categoria)
        .then( imagenes => setEstado ({ imagenes: imagenes, loading: false}));
    },[ categoria ]);
    

    return estado; //el return es un objeto {data[],loading}
}