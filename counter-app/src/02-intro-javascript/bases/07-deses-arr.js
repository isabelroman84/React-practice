const personajes = ['Harry', 'Hermione', 'Ron']
const [ , , p3 ] = personajes
console.log(p3)

const retornarArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornarArreglo();
console.log(letras, numeros);

/* 
El primer valor del arr se llamará nombre
El segundo valor, setNombre
*/

const hook = (valor) => {
    return [valor, () => {console.log('Hola mundo')}];
}

const [ nombre, setNombre ]  = hook('Neville');
// console.log(arr)

console.log(nombre)
setNombre()
// arr[1]();