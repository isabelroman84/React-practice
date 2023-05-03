// import { heroes } from './data/heroes';
import heroes, { owners } from "../data/heroes" // el export default no lleva las llaves

console.log('Este es owners del 08-imp-exp', owners)

// const getHeroeById = (id) => {
//     return heroes.find(heroe => {
//         if (heroe.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

// const getHeroeById = (id) => {
//     return heroes.find((heroe) =>  heroe.id === id)
// }

/* Find solo retorna uno, para buscar varios hay que usar filter */
export const getHeroeById = (id) => heroes.find((heroe) =>  heroe.id === id)
// console.log(getHeroeById(2))

export const getHeroeByOwner = (owner) => heroes.filter((heroe) =>  heroe.owner === owner)
// console.log(getHeroeByOwner('Marvel'))