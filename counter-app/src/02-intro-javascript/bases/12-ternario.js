const activo = true;

let mensaje = '';
if(!activo) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}
console.log(mensaje)

//puedo hacer una asignación a una variable. Activo es la condición
const mensaje2 = (activo) ? 'Activo' : 'Inactivo'
console.log(mensaje2)


/* si tengo una condición que es true (booleano) seguido del operador && que indica lo que quiero que
se ejecute si esa condición es true */
const mensaje3 = !activo && 'Activo'
console.log(mensaje3)