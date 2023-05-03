import { getHeroeById, getHeroeByOwner } from "../bases/08-imp-exp";

const promise = new Promise ((resolve, reject) => {
    // los snipets nos autocompletan el esquema de algo
    setTimeout(() => {
        const heroe = getHeroeById(2);
       resolve(heroe); // le va a transferir esta información al .then       
       reject('No se pudo encontrar el héroe')
    }, 2000);
});

promise.then((heroe) => {
    console.log('Then de la promesa', heroe)
})
.catch(err => console.warn(err));

const getHeroeByOwnerAsync = (heroe) => {
    return new Promise ((resolve, reject) => {
        // los snipets nos autocompletan el esquema de algo
        setTimeout(() => {
            const propietario = getHeroeByOwner(heroe);
            if(propietario && propietario.length > 0) {
                // console.log('Este es propietario')
                resolve(propietario); // le va a transferir esta información al .then       
            } else {
                // console.log('Propietario no encontrado')
                reject('No se pudo encontrar el propietario')
            }
        }, 2000);
    })
}

getHeroeByOwnerAsync('DC')
.then(console.log) // manda la referencia para que cuando se reciba then envíe el primer argumento
.catch(console.warn)