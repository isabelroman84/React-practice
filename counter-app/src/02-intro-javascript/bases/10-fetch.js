const apiKey = 'XgasOBgmRJgfE2ILCo4YGR5uaKPmyxy7'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
/* si la petición se hizo correctamente debe aparecer ok:true y status:200 
La información está en el RedableStream y accedo con response.json() que retorna otra promesa
El formato es complejo y debería optarse por encadenar promesas
peticion.then(resp => {
    resp.json().then(data => {
        console.log(data)
    })
})
.catch(console.warn);
*/
peticion.then(resp => resp.json()) //esto regresa una promesa
.then(({ data }) => { // paso esa promesa al siguiente then
    const { url } = data.images.original // en vez de data.data usamos desestructuración en línea 16
    // console.log(url)
    const img = document.createElement('img');
    img.src = url; // aquí renderiza lo que me provee url
    document.body.append(img);
})
.catch(console.warn);