
//Método filter --------------

const arr = [0, 1, 2, 3, 4, 5];
const filterResult = arr.filter((el, i) => {
    
    //console.log(i);
    return el > 2

})
//console.log(filterResult);

//Método map --------------

//const mapped = arr.map((el) => el * 2)
//console.log(mapped);

const users = [
    { id: 1, name: 'Juan', lastname: 'Rivera'},
    { id: 2, name: 'Jhon', lastname: 'Rivera'},
    { id: 3, name: 'Victoria', lastname: 'González'},
    { id: 4, name: 'Sofía', lastname: 'Rivera'}
]

const usersCard = users.map((e) => 
    `<p>El usuario de código ${e.id} se llama ${e.name} ${e.lastname}</p>`
);

//console.log(usersCard);


//Método reduce --------------

const getMax = (a, b) => Math.max(a ,b);
const r = arr.reduce((acc, el) => acc + el, 0); //Suma de todos los num del array
const max = arr.reduce(getMax); //Máximo número del array

//console.log(r, max);

//const r1 = users.reduce((acc, el) => `${acc === '' ? '' : `${acc},`} ${el.name}`, '');

const r1 = users.reduce((acc, el) => {
    if(el.id < 2){
        return acc
    }
    return acc.concat(el)
}, [])

console.log(r1);