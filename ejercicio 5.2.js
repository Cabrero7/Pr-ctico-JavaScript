console.log("----------------- Ejercicio 5.2 -----------------");

let libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    año: 1605,
    esAntiguo: function(){
        let años= 2024 - this.año;
        return años > 10;
    }
}

let esAntiguo = libro.esAntiguo();
console.log(`El libro '${libro.titulo}' es antiguo: ${esAntiguo}`);