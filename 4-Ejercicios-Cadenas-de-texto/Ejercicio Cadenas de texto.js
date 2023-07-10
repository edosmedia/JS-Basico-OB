// 1) - Una cadena de texto con tu Nombre
let nombre  = "Eduardo";

// 2) - Una cadena de texto con tu Apellido
let apellido = "Medrano";

// 3) Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

// 4) Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// 5) Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minusculas
let estudianteMinus = estudiante.toLocaleLowerCase();
console.log(estudianteMinus);

// 6) Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let estudiante_logitud = estudiante.length
console.log(estudiante_logitud);

// 7) Una variable que contenga la primera letra del Nombre
let nombre_Primeraletra = nombre.charAt(0);
console.log(nombre_Primeraletra);

// 8) Otra variable que contenga la última letra del Apellido
let apellido_Ultimaletra = apellido.charAt(apellido.length - 1);
console.log(apellido_Ultimaletra);

// 9) Una cadena de texto que elimine los espacios de la variable "estudiante"

let estudiante_sinEspacios = estudiante.replace(" ", "");
// let estudiante_sinEspacios = estudiante.replace(/ /g, "")
console.log(estudiante_sinEspacios);

// 10) Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let contiene_Nombre = estudiante.includes(nombre)

console.log(contiene_Nombre);



