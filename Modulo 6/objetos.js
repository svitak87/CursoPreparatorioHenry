var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

//console.log(tienePropiedad);

var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

//console.log(todasLasPropiedades);
var mundo = {continentes: 7, paises: 195, oceanos: 5}
for (let propiedad in mundo) {
    console.log('Esta es la propiedad: ', propiedad);
    console.log('Este es el valor: ', mundo[propiedad]);
 }
 //console.log(mundo);

 var objetoProducto = {};
   objetoProducto.calcularPrecioDescuento = calcularPrecioDescuento;
   console.log(objetoProducto.calcularPrecioDescuento);