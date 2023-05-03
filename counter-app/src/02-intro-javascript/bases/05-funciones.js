/* Es fácil caer en errores de asignación
function saludar(nombre) {
    return `Hola ${nombre}`
}
saludar = 30; // hace una advertencia pero genera el cambio de asignación
// console.log(saludar('Isabel'));
console.log(saludar); // muestra la referencia a la función
*/

const saludar = function (nombre) {
    return `Hola ${nombre}`
}
console.log(saludar('Isabel'));

const saludar2 = (nombre) => {
    return `Hola ${nombre}`
}
console.log(saludar2('James'));

const saludar3 = (nombre) => `Hola ${nombre}`
console.log(saludar3('Miguel'));

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'isabelroman84'
    }
}
console.log(getUser);

const getUser2 = () => ({ // encerrando en paréntesis retorno el obj de manera implícita
        uid: 'ABC123',
        username: 'isabelroman84'
    })

const user = getUser2();
console.log(user);

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC456',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('Miguel');
console.log(usuarioActivo);

/* Ejercicio
1. Transformar a función flecha
2. Retornar un objeto implícito
3. Probar que funciona */

const activeUser = (nombre) => ({
    uid: 'ABC456',
    username: nombre
})
console.log(activeUser('Miguel A.'));