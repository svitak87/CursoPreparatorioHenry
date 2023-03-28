var sumaTres = (x) => {
  return x + 3;
}

console.log(sumaTres(5));


var a = 1;
var b = 2;
var c = a = b;


function precedenciaDeValores(a, b, c){
    return (c = a = b);

}

function cuidadoConElConsoleLog(nombre){
    console.log (nombre);
    return nombre;
}

cuidadoConElConsoleLog("Juanita");

precedenciaDeValores(1, 2, c);

function saludar(){
    console.log ("Hola me llamo Oscar");
}

 
