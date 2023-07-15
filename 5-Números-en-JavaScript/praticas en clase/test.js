// Numbers y precisión en JS

// Declaracion de variables numericas (enteros y con decimales)

let a = 5;
console.log(a)

let b = 0.1;
console.log(b);

//precisión
let c = 0.2;
console.log(c)

console.log(b + c)

// Tricks para redondear exacto hacias abajo y poder obtener valores reales
console.log(Math.round(((b + c) * 100)) / 100); 


////////////////////////////////////////////////////////////
//Operaciones y redondeo
// Principales Operaciones Arismetica
let d = 3.5;
let e = 4.8;

//Suma (+)
console.log(d + e)

//Resta(-)
console.log(d - e)

// Multiplicacion (*)
console.log(d * e)

//Division (/)
console.log(d / e);

//Representacion de los numeros en candena de texto

console.log(typeof d);
let d_e = d.toString();

console.log(d_e);
console.log(typeof d_e);

//Redondeo de Numero decimales
let f = 3.3;
let g = f * 3;

console.log(g)

// .toFixed(x) - Limitacion el numero de decimales al valor (x)
console.log(g.toFixed(2));
console.log(typeof g.toFixed(2));

let h = 1293.1231231231231;
let i = 9876789123;
console.log(h.toFixed(2));
console.log(i.toFixed(2));

// .toPrecision(x) - Limita el numero de cifras significativas de conteo de izquierda a derecha
console.log(h.toPrecision(7)) // hace conteo de izquierda a derecha segun digitos para precisión
console.log(typeof h.toPrecision(7));// lo convierte en una cadena de texto

console.log(i.toPrecision(7))// hace conteo de izquierda a derecha segun digitos para precisión con anotacion cientifica con elevacion



//   Operador .valueOf() - Obtener valores numericos a partir de literal 
let j = 2;
let k  = new Number(3);

console.log(j);
console.log(k);
console.log(j + k);

console.log(j.valueOf() + k.valueOf()); // usando el metodo valueOf() para sacar el valor de la variable directamente

console.log(k.valueOf())

let srt = new String("Hola soy un string"); // Intera cada letra en una cadena de texto como un contructor 
console.log(srt)
console.log(srt.valueOf());

//  NaN (Not a Number) - Inifinity
let l = Number('Adios');
console.log(isNaN(l));

let numerador = 19;
let divisor

console.log(numerador / (divisor = 0) );  // como esta el divisor en cero valor es infinito y no tiene fin
console.log(numerador / (divisor = 2))

let divisor_2 = null;
console.log(numerador / divisor_2); // si la variable es null el con otra variable va dar valor inifito por que no tiene con quien dividir

// Como Convertir los string a valores numero Number , PaserInt y ParseFloat

let numero = '5.89';
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2); // Error de Concepto
console.log(Number(numero) + num2); // convertir string a numero con el metodo Number(n)
console.log(parseInt(numero) + num2); // convertir string a numero con el metodo parseInt(n) de forma de nuemro entero
console.log(parseFloat(numero) + num2); // convertir string a numero con el metodo parseFloat(n) pero de forma numero entero con presicion y decimales

//  Numero Hexadecimales 

// Numeros Hexadecimales (base 16)

let numHex = '0x3a5b1'; // todo numero Hexadecimales va en empezar en 0x;
console.log(numHex);
console.log(parseInt(numHex) * 6);

// Obtener los valores máximo y minimo en JavaScript
// Tips (El minimo valor que se puede trabajar en JS  es 0.000000000000000222)
let min_presicion = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_presicion); 
console.log(min_valor_JS);
console.log(max_valor_JS);
console.log(2 ** 5); // sacar la elevacion 










