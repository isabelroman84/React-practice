const getImagePromise = () => new Promise(resolve => resolve('https://github.com/isabelroman84'))
getImagePromise().then(console.log)

/* con async lo que voy a hacer es que la función retorne una promesa
con await lo convierte en síncrono, es decir, debe esperar a que esa promesa se ejecute antes de continuar
con la siguiente
*/
const getImage = async () => {
    // para manejo de los errores hay que usar try (que intente ejecutar el cuerpo de la función) y catch
    try {
        const apiKey = 'XgasOBgmRJgfE2ILCo4YGR5uaKPmyxy7';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url; // aquí renderiza lo que me provee url
        document.body.append(img);
    } catch(error) {
        //  se puede usar url de una imagen por defecto
        // manejo del error 
        console.error(error)
    }
}

getImage();