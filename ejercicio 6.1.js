console.log("----------------- Ejercicio 5.2 -----------------");

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = [];

for (let i = 0; i < numeros.length; i++) {
    result[i] = numeros[i] * 2;
}

console.log("Números originales: ", numeros);
console.log("Números multiplicados por 2: ", result);