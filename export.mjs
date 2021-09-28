const name = ['Juan', 'Pablo'];
const numbers = [1, 2, 3, 4];
const lastName = ['Rivera', 'Gonzalez']

//module.exports = {name, numbers};

const fn1 = (a, b) => {
    console.log(a + b);
}

function fn2(){
    console.log('Soy fn2');
}

export { numbers, lastName, fn1, fn2 }
export default name;