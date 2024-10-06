console.log("----------------- Ejercicio 3.2 -----------------");

let num;

do{
    num = parseFloat(prompt("Ingresa un número mayor a 100:"));
    if(num <= 100){
        console.log("El número es menor o igual a 100")
    }
}while(num <= 100);
console.log("Ingresaste un número mayor a 100: "+num);
