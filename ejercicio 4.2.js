console.log("----------------- Ejercicio 4.2 -----------------");
function convertirCelsiusAFahrenheit (c){
    let f = c * 1.8 + 32;
    return f
}

let c = 30
let f = convertirCelsiusAFahrenheit(c);
console.log(c + "°C son equivalentes a " + f + "°F");