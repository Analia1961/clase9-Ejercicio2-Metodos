// CLASE 9 - Lunes 16 de mayo de 2022
// Estructuras de Datos y Métodos
// Ejercicio: Sumar Arreglos (con Métodos)

/*• Sumar los elementos de cada una de las posiciones
de dos vectores y guardar el resultado en otro vector
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario*/

//------------- ✿◕‿◕✿----------------
// CODIGO ENVIADO POR LA ALUMNA GISELA GENTILE
//------------- ✿◕‿◕✿----------------

let dimension: number = Number(prompt("Ingrese la dimension del arreglo..."));

let primerArreglo: number[] = new Array(dimension);
let segundoArreglo: number[] = new Array(dimension);
let tercerArreglo: number[] = new Array(dimension);
let indice: number;

let cargarArreglo = (arreglo: number[], cantidad: number): number[] => {
  for (indice = 0; indice < cantidad; indice++) {
    arreglo[indice] = Number(
      prompt("Ingrese el valor de la posición$[indice]")
    );
  }

  return arreglo;
};

let sumarArreglos = (
  arreglo1: number[],
  arreglo2: number[],
  arreglo3: number[],
  cantidad: number
): number[] => {
  for (indice = 0; indice < cantidad; indice++) {
    arreglo3[indice] = arreglo1[indice] + arreglo2[indice];
  }

  return arreglo3;
};

cargarArreglo(primerArreglo, dimension);
cargarArreglo(segundoArreglo, dimension);
console.log(
  sumarArreglos(primerArreglo, segundoArreglo, tercerArreglo, dimension)
);

// ¡¡Gracias GISELA!! ☆(◕‿◕)☆
