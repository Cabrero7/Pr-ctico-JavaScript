console.log("----------------- Ejercicio 5.2 -----------------");

let persona = {
    nombre: "Dani",
    edad: 21,
    ciudad: "Godoy Cruz",
    
    cambiarCiudad: function(nuevaCiudad){
        this.ciudad = nuevaCiudad;
    }
};

console.log("Persona: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad);

persona.cambiarCiudad("Maipú");

console.log("Persona: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad);