
//Funciones con la palabra reservada function

function Fn(){
    this.nombre = 'Juan'
    this.apellido = 'Rivera'
}

Fn.prototype.lala = function prototype(){}

const r = new Fn();
//console.log(r.__proto__);

//------------------------------------------------------------
// fat arrow function

console.log(this);
const fatFn = () => { //No tienen contexto
    const obj = {}
    this.prop = 'propiedad';
    obj.prop = 'propiedad obj'
    return obj;
}
const r1 = fatFn();
console.log(this);

//console.log(r1);

//-------------------------------------------------------------
//Return implicito

const fnR = () => 2

console.log(fnR());