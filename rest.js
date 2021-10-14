const rest = (a, b, ...args) => {
    console.log(a, b);
    console.log(args);
}

//rest(1,2,3);

const obj = {
    a: 1, b: 2, c: 3, d: 4
}

//const { a, b, ...other} = obj;
//console.log(a, b, other);

const arr = [1, 2, 3, 4, 5]

const [ a, b, ...arr1 ] = arr;
//console.log(a, b , arr1);

const useState = () => ['valor', () => {}]
const [value, setValue] = useState();

console.log(value, setValue);