// Dado el siguiente objeto:
// const empleados = [
//   { name: "Luis", email: "Luis@gmail.com" },
//   { name: "Ana", email: "Ana@gmail.com" },
//   { name: "Andrea", email: "Andrea@gmail.com" },
// ];
// Extrae la empleada Ana con todos sus datos personales:
// {"name":"Ana", "email":"Ana@gmail.com"}
// Extrae el email del empleado Luis --> Luis@gmail.com

// Dado el siguiente objeto:
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];
  
  // Extraer la empleada Ana con todos sus datos personales:
  const anita = empleados.find(empleado => empleado.name === "Ana");
  console.log(anita);
  
  // Extraer el email del empleado Luis
  const luisito = empleados.find(empleado => empleado.name === "Luis");
  console.log(luisito.email);
  

//   Dado el siguiente objeto:
// const pokemon = {
//     name: "Bulbasaur",
//     type: "grass",
//     ability: {
//         "primary": "Overgrow",
//         "hidden": "Chlorophyll"
//     },
//     stats: {
//         hp: 45,
//         attack: 49,
//         deffense: 59,
//         speed: 45
//     },
//     moves: [
//         "Growl", "Tackle", "Vine Whip", "Razor Leaf"
//     ]
// }
// Cambia el nombre de la propiedad “name” por “nombre
// Extrae el nombre del Pokemon
// Extrae el tipo de Pokemon que es
// Extrae el movimiento “Tackle”

const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
    const { name: nombre, ...otrospokemon } = pokemon;
    
    console.log(nombre);

    console.log(otrospokemon.type)

    console.log(otrospokemon.moves[1])


// 2. Ejercicios spread/rest
// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:
// const pikachu = {
//     name: "Pikachu",
//     type: "electric",
//     ability: {
//         "primary": "Static",
//         "hidden": "Lightning rod"
//     },
//     stats: {
//         hp: 35,
//         attack: 55,
//         deffense: 40,
//         speed: 90
//     },
//     moves: [
//         "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
//     ],
// }

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const pokemones = {...pokemon, pikachu}

console.log(pokemones)


// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
//   sumEveryOther(6, 8, 2, 3, 1); //20
//   sumEveryOther(11, 3, 12); //26 

const arraynumeros = [6, 8, 2, 3, 1]
function sumEveryOther(arraynumeros) {
    const suma = Math.(...arraynumeros)
    console.log(suma)
}



// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
// addOnlyNums(1, 'perro', 2, 4); //7


// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
// countTheArgs('gato', 'perro'); //2
// countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).


    


