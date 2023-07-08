let lista = [1,2,3,4,5,6,7,8,9,10,12];

let persona = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    isDev: true,
  },
  {
    nombre: "Alex",
    apellido: "Seguro",
    edad: 22,
    isDev: true,
  },
  {
    nombre: "Ramona",
    apellido: "Perez",
    edad: 25,
    isDev: false,
  },
  {
    nombre: "Fila",
    apellido: "Taco",
    edad: 19,
    isDev: true,
  },
];

lista.forEach(valor =>  {
  console.log(valor)
})

for(let propiedad in persona){
  console.log(persona[propiedad].isDev);
}

let i = 0;
let max = 10

while (i <= max) {
  console.log(i);
  ++i
}

i = 60;

do {
  ++i;
  console.log("Estoy en el do while")
}while(i < max) {
  console.log(i)
}



for (let i = 0; i < lista.length; i++) {
  const element = lista[i];

  if (element === 3) {
    continue
  }
  console.log(element)
  if(element >= 5){
    break
  }
}

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
  bucleUnidades: while (true) {
    console.log(`El numero actual es  decenas ${decenas}${unidades}`);
    unidades++;
    if (unidades === 10) {
      unidades = 0;

      break bucleUnidades;
    }
    if (decenas === 2) {
      console.log(decenas);
      break bucleDecenas;
    }
  }
  decenas++;
}
