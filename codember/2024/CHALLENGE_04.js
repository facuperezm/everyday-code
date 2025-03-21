// Desafío 5: ¡Encuentra a ΩMEGA!
// La IA maligna ΩMEGA está acorralada. Tras revisar todos los nodos sanos de la red en el reto anterior... ¡hemos detectado que ΩMEGA se ha escondido en uno!

// No sabemos exactamente cuál es... pero sabemos las reglas que ha seguido ΩMEGA para esconderse.

// Necesitamos encontrar los números que cumplen las siguientes condiciones:

// El número es primo.
// La suma de sus dígitos también es un número primo.
// Tu tarea es escribir un programa que encuentre cuántos números de la lista cumplen con estas condiciones y determinar cuál es el tercer número que cumple con ellas al recorrer la lista en orden ascendente.

// Ejemplo:

// Si tuviéramos la lista: 11,12,13,14

// 11: Es primo. 1 + 1 = 2, que es primo. → Cumple.
// 12: No es primo. → No cumple.
// 13: Es primo. 1 + 3 = 4, que no es primo. → No cumple.
// 14: No es primo. → No cumple.
// En este caso, solo un número cumple las condiciones, y ese número sería el primero (11).

// ¿Qué debes hacer?

// Analiza la lista de nodos del resultado del reto anterior y encuentra todos los números que cumplen las condiciones.
// Determina cuántos números cumplen las condiciones.
// Identifica el tercer número que cumple las condiciones al recorrer la lista en orden ascendente.
// Respuesta:

// Envía el número total de números que cumplen las condiciones y el tercer número encontrado, separados por un guión. Por ejemplo, si hay 4 números que cumplen y el tercer número es 11, enviarías: submit 4-11

function esPrimo(numero) {
  if (numero < 2) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

function sumaDigitos(numero) {
  return numero
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, digito) => acc + digito, 0);
}

function encontrarOmega(nodos) {
  const numerosQueCumplen = [];

  for (const numero of nodos) {
    if (esPrimo(numero) && esPrimo(sumaDigitos(numero))) {
      numerosQueCumplen.push(numero);
    }
  }

  const totalCumplen = numerosQueCumplen.length;
  const tercerNumero = numerosQueCumplen[2] || null;

  return `${totalCumplen}-${tercerNumero}`;
}

const nodos = [
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33,
  34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 71, 72,
  73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 155, 156, 157,
  158, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 195, 196,
];

console.log(encontrarOmega(nodos));
