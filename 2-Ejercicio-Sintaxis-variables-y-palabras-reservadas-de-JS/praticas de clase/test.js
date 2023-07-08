let saldo = 100;
let efectivo = 100;

if (efectivo < saldo) {
  let resultado = saldo - efectivo;
  console.log("Transaccion Aprobada " + "tu saldo en cuenta es " + resultado);
} else if(efectivo <= saldo) {
 let resultado = saldo - efectivo;
 console.log("Transaccion Aprobada " + "tu saldo en cuenta es " + resultado);
}
else{
  console.log("Transaccion Rechazada, Saldo Insuficiente");
  if (efectivo > saldo) {
          console.log("Esta retirando un monto mas que tu saldo a favor")
}
}