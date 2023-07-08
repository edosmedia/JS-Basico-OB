let numero = 10;
let factorial = 1;
let i = 1;

while (i <= numero) {
  factorial = factorial * i;
  i++;

  if (i == 7) {
    console.log(factorial);
    break;
  }
}
