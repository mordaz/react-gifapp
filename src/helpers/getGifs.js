//creamos un funcion para obtener imagenes por categoria
export const getGifs = async( categoria ) => {
    //ruta generada para obtener 10 imagenes de ghipy
    //encodeURI reemplaza los espacios por %20 y arregla la cadena para una url
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=HFalvsKMf0YuOCiIDUqA3yamw6pzllMT`;
    //invocamos la respuesta usando fetch
    const resp = await fetch ( url );
    //convertimos la respues a formato json
    const data = await resp.json();
    //extraemos solo la informacion de la imagen necesaria de la respuesta
    //map recorre el arreglo para regresar cada elemento dentro de el
    const gifs = data.data.map( img => {
        //regresamos la ruta de la imagen para generar un objeto de imagenes
        //solo con los datos necesarios para la aplicacion
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url 
        }
    });

    return gifs;
}