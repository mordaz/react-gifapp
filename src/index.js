//libreria para poder crear elementos html usando javascript
import React from 'react';
//libreria para manipular los elementos html del documento html
import ReactDOM from 'react-dom';

//importamos el componente que creamos 
import GifExpertApp  from './GifExpertApp';

//importamos la plantilla css
import './index.css';

//referenciamos el <div id="app"></div> del documento principal index.html
//para poder hacer esta referencia se requiere importar el react-dom
const divRoot = document.querySelector('#app');

//enviamos el componente de saludo al documento usando ReactDOM
//los componentes de react se deben enviar con <>
//si deseo enviar properties al componente debo agregarlos despues del nombre de la app
ReactDOM.render( <GifExpertApp /> , divRoot );
