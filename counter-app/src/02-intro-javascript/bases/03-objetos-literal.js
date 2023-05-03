const persona = {
    nombre: 'Isabel',
    apellido: 'Román',
    edad: 38,
    direccion: {
        ciudad: 'Rionegro',
        zip: 54040,
        lat: 14.322,
        long: 34.9322,
    }
};

console.log(persona);
// console.log({ persona }); // para reconocer el obj por su nombre, cuando tenemos muchos
// console.table(persona); // para verlo en forma de tabla
/* WARNING: esto no se hace porque estoy afectando al objeto
const persona2 = persona // asignación de referencia, modifica el objeto en su posición de memoria
persona2.nombre = 'Lina'
*/

// Para crear un clon/copia, creo un nuevo objeto trayendo las propiedades con el spread
const persona2 = {...persona};
console.log(persona2);
