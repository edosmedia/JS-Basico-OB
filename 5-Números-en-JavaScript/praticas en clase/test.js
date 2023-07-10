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

