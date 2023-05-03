const usuario = {
    nombre: 'Isabel',
    edad: 38,
    clave: 'isabelroman'
};

// console.log(usuario.nombre);
// console.log(usuario.edad);
// console.log(usuario.clave);

const { nombre, edad, clave } = usuario;
// const { nombre:nombre2 } = usuario; // en caso de que tenga otra var que se llame igual
console.log(nombre);
console.log(edad, clave);

// const retornaPersona = (persona) => {
//     console.log (persona)
// };

/*
// puedo asignar valores por defecto aunque no venga en el objeto original
const retornaPersona = ({nombre, edad, rol = 'Aprendiz'}) => {
    console.log (nombre, edad, rol)
};
retornaPersona (usuario)
retornaPersona (usuario)
*/

const userContext = ({clave, nombre, edad, rol = 'Aprendiz'}) => {
    // console.log (nombre, edad, rol)
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.833,
            lng: 23.54
        }
    }
};

// const user = userContext(usuario);
// console.log(user)
// const { nombreClave, anios, latlng} = userContext(usuario)
// console.log(nombreClave, anios, latlng)
// si quiero que se estén en sus respectivas constantes (objetos anidados)
const { nombreClave, anios, latlng:{lat, lng}} = userContext(usuario)
console.log(nombreClave, anios)
console.log(lat, lng)