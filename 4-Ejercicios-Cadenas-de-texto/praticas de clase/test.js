// Tipo de declaraciones de string

let str_simple = "Hola como estas soy un string con comillas simple";
let str_doble = "Hola como estas soy un string con comillas doble";

console.log(str_simple);
console.log(str_doble);

let str_comillas = 'Esto es la prueba de un entre comillas "doble dentro de otro"';
let str_comillas_simples = 'Esto es la prueba de un entre comillas "doble dentro de otro"';
let str_comillas_simples_2 = "Esto es la prueba de un entre comillas 'doble dentro de otro'";
let str_comillas_dobles = "Esto es la prueba de un entre comillas 'doble dentro de otro'";

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_simples_2);
console.log(str_comillas_dobles);

// Backticks
let str_backticks = `Esto es una prueba con los backticks y  tiene entre 'comilla simple' y "comillas doble"`;
console.log(str_backticks);

let nombre = "Eduardo Medrano";
let saludos = `Hola ${nombre}, eres un DEV`;

console.log(saludos);

let plantilla = `
<html>
<body> 
<h1> Hola ${nombre} </h1>
<h2> Alcancaremos la meta, Las Patricas hacen el maestro </h2>
</body>
</html>
`;

console.log(plantilla);


// Metodos de String mas usados

let str = "Hola como estas Eduardo Medrano";
console.log(str.length); // da longitud de un string

//Obtener Parte de una candena de caracteres
// slice() substring() substr()

let slice_str = str.slice(0, 23) // te devuelve el string posicion deseada de comienzo a fin de los valores en el metodo
console.log(slice_str);

let substring_str = str.substring(0, 23);// te devuelve el string posicion deseada de comienzo a fin de los valores en el metodo
console.log(substring_str);


let substr_str = str.substr(0, 23)
console.log(substr_str);

// Remplazar parte del contenido del string

let str2 = "Hola como estas Eduardo Medrano, eres un DEV";

str2.replace('DEV', 'DEV Full Stack');

console.log(str2.replace('DEV', 'DEV Full Stack')); // puede ayudar eliminar espacios tambien

let text_large = "El oeste de Texas divide la frontera entre México y Nuevo México. Es muy bella pero aspera, llena de cactus, en esta region se encuentran las Davis Mountains. Todo el terreno esta lleno de piedra caliza, torcidos arboles de mezquite y espinosos nopales. Para admirar la verdadera belleza desertica, visite el Parque Nacional de Big Bend, cerca de Brownsville. Es el lugar favorito para los excurcionistas, acampadores y entusiastas de las rocas. Pequeños pueblos y ranchos se encuentran a lo largo de las planicies y cañones de esta region. El area solo tiene dos estaciones, tibia y realmente caliente. La mejor epoca para visitarla es de Diciembre a Marzo cuando los dias son tibios, las noches son frescas y florecen las plantas del desierto con la humedad en el aire.";

console.log(text_large.replace("México", "Venezuela")); // pero solo remplaza el primero encontrado

console.log(text_large.replace(/México/g, "Venezuela")); // pero solo remplaza en todo la concidencia en el texto buscado
// cuando usamaos /g forma de manera global esto son expresiones regulares 

//Metodo de Cadenas de texto (parte 2)

let input = "Escorpio";
let db = "escorpio";

console.log(input === db);


/* 
toLocaleLowerCase() = metodo para tranformar el string en minuscula 
toLocaleUpperCase() = metodo para tranformar el string en mayuscula
*/

console.log(input.toLocaleLowerCase());

console.log(input.toLocaleUpperCase());

console.log(input.toLocaleLowerCase() === db.toLocaleLowerCase());

console.log(input.toLocaleUpperCase() === db.toLocaleUpperCase());


// Concadenacion de String 

let Nombre = "Eduardo";
let Apellido = "Medrano";

console.log(Nombre.concat(" ", Apellido, " Piedra"));

console.log(Nombre + " " + Apellido);

console.log(`${Nombre} ${Apellido}`);


// Eliminar Espacios del Principio a Fin, con el metodo trim()
let str_3 = "    El oeste de Texas divide la frontera entre México y Nuevo México.      ";

console.log(str_3.length)

console.log(str_3.trim().length); // Eliminar Espacios al Comienzo y Final 

console.log(str_3.trim());

console.log(str_3.trimEnd().length); // Eliminar Espacios al Final
console.log(str_3.trimEnd()); 

console.log(str_3.trimStart().length);
console.log(str_3.trimStart()); // Eliminar Espacios al Comienzo

// Obtener el caracter que hay cierta posicion 

let str_4 = "Hola soy el string y soy numero 4";

console.log(str_4.charAt(5))
console.log(str_4[5]) // Ontener como lista 

// Obtener la posicion de un caracter en el string

let str_5 = "Hola soy el string y soy numero 5";

console.log(str_5.indexOf("soy")); // atravez de indexOf() busca el string que esta  buscando la primera instacia y nos devuelve la posicion
console.log(str_5.charAt(9)); // atravez de  charAt() le podemos pasar el numero de posicion y no devuelve valor de esa posicion 
console.log(str_5.lastIndexOf("soy")); // atravez de indexOf() busca el string que esta  buscando la primera instacia y nos devuelve la posicion

// Metodo de Cadenas de Texto  (Parte 3)
// https://regexr.com

let text_reg = "El pensamiento es la operación intelectual de carácter individual que se produce a partir de procesos de la razón. Los pensamientos son productos que elabora la mente, voluntariamente a partir de una orden racional, o involuntariamente a través de un estímulo externo.";

console.log(text_reg.match(/pensamiento/g)); // metodo match 

// Metodo includes() para buscar una palabra dentro del string de maneral global 
console.log(text_reg.includes("pensamiento"));

// Metodo startsWith() para buscar una palabra dentro del string al principio de la cadena, y puede ser una la palabra o oracion
console.log(text_reg.startsWith("El pensamiento"));

// Metodo endsWith() para buscar una palabra dentro del string al final de la cadena, y puede ser una la palabra o oracion
console.log(text_reg.endsWith("externo."));









