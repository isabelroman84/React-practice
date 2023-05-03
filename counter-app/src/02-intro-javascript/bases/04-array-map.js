// const array = new Array(100, 1) // añade 100 posiciones vacías
const array = [1, 2, 3, 4]
// array.push(5) // modifica el arreglo original

let array2 = [ ...array, 5 ];
const array3 = array2.map(function(num) {
    return num * 2
})

console.log(array);
console.log(array2);
console.log(array3);