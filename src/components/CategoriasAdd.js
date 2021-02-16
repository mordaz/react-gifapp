//rafc + TAB crea el codigo base del componente

//importacion de react para usar hooks useState
import React, { useState } from 'react'

//libreria con herramientas para validar argumentos props
import PropTypes from 'prop-types';

//creamos un componente para complementar la app
//un componente es una parte de la app
//recibimos un props con la funcion del otro componente para agregar categorias
const CategoriasAdd = ({ setCategorias }) => {

    //creamos un hook para controlar el valor del input text
    const [ inputCategoria , setInputCategoria ] = useState('');

    //creamos un evento para extraer el valor del input en onChange
    const onChangeInputCategoria = (elemento) => {
        //cada que cambia el valor del input por el usuario se actualizar el hook
        setInputCategoria(elemento.target.value);        
    }

    //creamos otro evento para controlar cuando el usuario presiona Enter
    const onSubmitCategoria = (elemento) => {
        //Evitamos que se actualize todo el formulario por defecto
        elemento.preventDefault();

        //antes de agregar la categoria hacemos validaciones
        if (inputCategoria.trim().length > 2){
            //Agregamos la categoria del hook del otro componente
            //como no tenemos acceso al arreglo de categorias hacemos uso de la 
            //funcion callback que trae el valor de dicas categorias para agregar
            //el elemento nuevo con el valor del hook del input
            setCategorias( categorias => [inputCategoria,...categorias]);
            //borramos el contenido del input
            setInputCategoria ('');
        }
    }

    //si regreso un componente form al hacer un enter refresca la pagina auntomaticamente
    //asi que desactivamos esa funcion por defecto y la asignamos a nuestra funcion
    return (    
        <form onSubmit={ onSubmitCategoria }>
            {/*Cuando se aplica un valor hook al input se debe emplear el metodo onChange */}
            <input
                type="text"
                value={ inputCategoria }
                onChange={ onChangeInputCategoria }
            />
        </form>
    )
}

//usando proptypes declaramos las properties que son obligatorias y su tipo
CategoriasAdd.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default CategoriasAdd;