function esVocal(letra) {
    // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
    // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
    // Si no es vocal, tambien debe retornar "Dato incorrecto".
    // Tu código:
    if (letra === ("a"||"e"||"i"||"o"||"u")){
        console.log("Es vocal")
    }else if (letra.leght > 1){
        console.log("Dato incorrecto");
    }else{
        (letra !== "a"||"e"||"i"||"o"||"u" )
        console.log("Dato incorrecto");
    }

}

console.log(esVocal("a"));