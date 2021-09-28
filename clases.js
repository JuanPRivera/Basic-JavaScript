/* const Rectangle = class R {

} */

class Rectangle {

}

function square(){

}

const r = new Rectangle();

class Circle{
    prop = 'my prop';
    #ovalo;
    static estatica = 21;

    constructor(e = 'medio', hambre = false){
        this.e = e;
        this.#ovalo = hambre
    }

    imprimir(){
        console.log(`Soy un circulo ${this.e} ${this.#ovalo ? 'ovalado'  : 'perfectamente circular'}`);
    }

    static deformar(){
        console.log(this.estatica, 'deformado');
    }
}

Circle.deformar();
const small = new Circle('pequeño');
//console.log(small.__proto__.imprimir);
//small.imprimir();
const big = new Circle('grande');
//big.imprimir();
const b = new Circle();
//b.imprimir();