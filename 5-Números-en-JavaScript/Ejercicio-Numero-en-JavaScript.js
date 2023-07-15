//Una variable que contenga tu altura en centímetros (entero)
let alturaCentimetro = 187;
//Una variable que contenga tu altura en metros (número de coma flotante) / Una variable que contenga tu altura en metros (decimal) 
let alturaMetro = 1.87;
// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKg = 94.50;

//Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaMetro_redondeada = Math.round(alturaMetro);
console.log(alturaMetro_redondeada);

//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesokgRedondado_min = Math.floor(pesoKg);
console.log(pesokgRedondado_min)

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let igualmaxValor = (Number.MAX_VALUE + 1) === Number.MAX_VALUE;
console.log(igualmaxValor);

// alternativa mas larga 

let numeroMax = Number.MAX_VALUE;
const numeroMax_mas1 = numeroMax  + 1;
let numeroMaximo_igual = numeroMax_mas1 === numeroMax;
console.log(numeroMaximo_igual);
