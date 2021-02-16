//FC FUNCTIONAL COMPONENTS O BIEN COMPONENTES EN FUNCIONES

/* 
APP QUE SE COMUNICA CON OTRO COPONENTE PARA CARGAR CATEGORIAS
Y A SU VEZ CONTINE OTRO COMPONENTE POR CADA CATEGORIA CREADA
*/

//libreria para poder crear elementos html usando javascript
//Adicionalmente por destructuracion sacamos el hook useState
//todo los que empieza con use es un hook
//HOOKS SON VARIABLES QUE SI SON ASIGNADAS A UN ELEMENTO HTML 
//Y SON CAMBIADAS A TRAVEZ DE SU FUNCION SET EL DOCUMENTO SE ACTUALIZA AUTOMATICAMENTE
import React, {useState} from 'react';

//Componente creado para agregar categorias
import CategoriasAdd from './components/CategoriasAdd';
import { GifGrid } from './components/GifGrid';

//Creamos el componente FC
const GifExpertApp = ( { titulo} ) => {


    //creamos un componente state que por destructuracion genera un arreglo con un valor y una funcion
    //le asignamos un arreglo para agregar categorias de la app
    const [ categorias , setCategorias ] = useState(['Dragon Ball']);

    /*
    //creamos la funcion que se ejecutara al hacer click al boton
    const onClickAgregar = (e) => {
        //para cambiar el valor de una variable hook se debe hacer a travez de la funcion set
        //al cambiar el valor de una variable hook, react renderiza el documento automaticamente
        //se debe enviar el nuevo valor de la variable como parametro al set
        //cuando se usa setCategories reescribes completamente el valor del hook 
        //con lo que se manda como parametro, por eso enviamos una copia usando spred mas la nueva
        setCategorias( [...categorias,'Bleach']); 
    } 
    */

    //enviamos un titulo con la lista de categorias de regreso
    //tambien agregamos un componente para agregar categorias enviando el set del hook
    return (<>
        <h2>GifExpertApp</h2>
        <CategoriasAdd setCategorias={ setCategorias }/>
        <hr />
   
        <ol>
            {/*Para mostrar los elementos del arreglo como lista*/}
            {/*Usamos una expresion que regrese un valor directamente del arreglo conmo map*/}
            {/*map es una funcion callback que recorre todo el arreglo*/}
            {
                categorias.map( categoria => {
                    return <GifGrid
                        key={ categoria } 
                        categoria={ categoria } 
                    />
                })
            }
        </ol>
    </>);
}
/*
//usando proptypes declaramos las properties que son obligatorias y su tipo
GifExpertApp.propTypes = {
    //titulo: PropTypes.string.isRequired
}
//declarando valores por defecto
GifExpertAppdefaultProps = {
    //subtitulo: 'Subtitulo por default'
}
*/
export default GifExpertApp;