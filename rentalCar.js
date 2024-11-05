function rentalCar(tipoVehiculo, diasAlquiler, sillaBebes) { //string , number , booleano//
    let compacto = 14000;
    let mediano = 17000;
    let camioneta = 28000;
    let precioFinal = 0
    let preciosillaBebes = 1200;


    switch (tipoVehiculo.toLowerCase()) {
        case "compacto":
            precioFinal = compacto * diasAlquiler
            break;
        case "mediano":
            precioFinal = mediano * diasAlquiler;
            break;
        case "camioneta":
            precioFinal = camioneta * diasAlquiler
            break;
        default:
            return "Tipo de vehículo no valido . Por favor seleccione entre compacto,mediano o camioneta." ;
    }


    if (sillaBebes) {
        precioFinal += preciosillaBebes * diasAlquiler;
    }
    return precioFinal;
}

// console.log(rentalCar("compacto", 3, false))
// console.log(rentalCar("mediano", 2, true))
// console.log(rentalCar("Camioneta", 3, false)) //prueba de mensaje//



// let precio1 = rentalCar("compacto", 3, false)
// console.log(`Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días utilizados, el monto total a pagar es de ${precio1}`);

// let precio2 = rentalCar("mediano", 2, true);
// console.log(`Estimado cliente: en base al tipo de vehículo mediano alquilado, considerando los 2 días utilizados y la silla para niños, el monto total a pagar es de ${precio2}`);

// let precio3 = rentalCar("Camioneta", 3, false);
// console.log(`Estimado cliente: en base al tipo de vehículo camioneta alquilado, considerando los 3 días utilizados, el monto total a pagar es de ${precio3}`);

// let precio4 = rentalCar("auto", 3, true);
// console.log(precio4); // "Tipo de vehículo no válido"

// let precio5 = rentalCar ("auto"  ,0 ) ;
// console.log(`La cantidad de días ingresados es incorrecto , por favor ingresá un número válido. `) ; //vehículo y cantidad de días incorrectos
