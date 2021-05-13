// Pura
function suma(a,b){
    return a+b;
}
// Pura
let resta = function(a,b){
    return a-b;
}
// Pura
let multiplicacion = (a,b) => a*b; // hay un return implícito. OJO!
console.log(multiplicacion(2,3))

let cuadrado = x => x**2;
console.log(cuadrado(3));


/* function cuadrado(x){
    return x**2;
} */
// Pura
let division = (a,b) =>{
    console.log(`dividiendo ${a} entre ${b}`);
    return a/b;
}
console.log(division(4,2));

// Impura
function impura ( a, b ) {
    return a + b + Math.random();
}
impura(2,2)
console.log(impura(2,2));

// Impura
let numero = 1; // Scope global/ ambito/desde donde puedes acceder
const incremento = () => {
    return numero += 1;
}
console.log(incremento());// 2
console.log(incremento());//2? 3?

// En el Quiz
let contador = 0; // Scope global
const sumaAcierto = () => contador += 1;

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

const devuelvePersona = () => ({nombre: "alex"}); 
console.log(devuelvePersona());

/* const devuelvePersona = () => {
    return {nombre: "alex"};
}   */

// MAP
let productos = ["patatas", "pescado", "naranjas", "manzana"];

for (let index = 0; index < productos.length; index++) {
    console.log(`he comprado: ${productos[index]}`);
}
// p = patatas,pescado,naranjas,manzana
// i = 0,1,2,3
//productos.map((p,i)=>console.log(`he comprado: ${p}. Posicion:${i}`))

console.log(productos.map((p)=>`he comprado: ${p}`));

// FILTER. Validar
let validar = (elemento) => elemento >= 10;
let filtrados = [false, 22, 4, 2, null, "Bye"].filter(validar);
console.log(filtrados);

/* function validar(elemento){
    // if(elemento >= 10)
    //     return true
    // else
    //     return false
    return elemento >= 10;
} */



//Con FILTER
let words = ['Hola', 'bienvenidos', 'queridos', 'FullStack', 'Developers'];
let checkLongWords = word => word.length > 6;
let longWords = words.filter(checkLongWords);
console.log(longWords);


//REDUCE --> Pasas array y devuelve un único valor
let lista = [2,-1,1,3,5,8];
let acumulado = lista.reduce(function(anterior, actual){
    console.log(`anterior:${anterior} actual:${actual}`)
  return anterior + actual;
});
console.log(acumulado);

// Reduce: Calcular la media de temperatura semanal
let temperaturas = [20,23,15,20,21,18];
// 20+23+15+20+21+18.......
let t_acumulada = temperaturas.reduce(function(acumulado, actual){
    console.log(`acumulado:${acumulado} actual:${actual}`)
  return acumulado + actual;
});

// Media = suma_total/num_elementos
let media = t_acumulada/temperaturas.length;
console.log(`la temperatura media es: ${media}`);
