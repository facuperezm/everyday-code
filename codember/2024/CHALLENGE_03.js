// Desafío 4: Evitando el caos en la red
// ¡La IA maligna ΩMEGA está atacando la red de nodos de la empresa! Cada nodo tiene un identificador único que es un número entero y está conectado a otros nodos, formando una compleja estructura.
// ΩMEGA está destruyendo todas las redes que consten de 3 nodos o más conectados entre sí. ¡Hay que descubrir qué nodos están a salvo de sus ataques!

// ¿Cómo funciona la red?

// La red se representa como una lista de pares de conexiones entre nodos. Por ejemplo:

// Entrada: [[1, 2], [2, 3], [4, 5]]
// Esto significa:

// El nodo 1 está conectado al nodo 2.
// El nodo 2 está conectado al nodo 3.
// El nodo 4 está conectado al nodo 5.
// En este caso:

// Los nodos 1, 2 y 3 forman un grupo conectado.
// Los nodos 4 y 5 forman otro grupo conectado.
// Ejemplo 1

// Entrada: [[1, 2], [2, 3], [4, 5]]
// Redes: [1, 2, 3] y [4, 5]
// ΩMEGA destruye la red [1, 2, 3]
// Nodos a salvo: 4 y 5
// Salida: [4, 5]
// Ejemplo 2

// Entrada: [[1, 2], [2, 3], [3, 4]]
// Redes: [1, 2, 3, 4]
// ΩMEGA destruye la red [1, 2, 3, 4]
// Nodos a salvo: ninguno
// Salida: []
// Ejemplo 3

// Entrada: [[4, 6], [7, 9], [10, 12], [12, 16]]
// Redes: [4, 6], [7, 9], [10, 12, 16]
// ΩMEGA destruye la red [10, 12, 16]
// Nodos a salvo: 4, 6, 7 y 9
// Salida: [4, 6, 7, 9]
// ¿Qué debes hacer?

// Accede al archivo network.txt, que contiene una lista de conexiones entre nodos. Envía la lista de nodos ordenados de forma ascendente, separado por comas y sin espacios, que se han salvado del ataque. Por ejemplo, del Ejemplo 1 enviarías a la terminal submit 4,5.

// Pista: Hay 70 nodos a salvo... ¡ahora sólo falta saber cuáles son!

function encontrarNodosSalvados(conexiones) {
  function dfs(nodo, visitados, componente) {
    visitados.add(nodo);
    componente.push(nodo);

    for (const vecino of grafo[nodo] || []) {
      if (!visitados.has(vecino)) {
        dfs(vecino, visitados, componente);
      }
    }
  }

  const grafo = {};
  for (const [a, b] of conexiones) {
    if (!grafo[a]) grafo[a] = [];
    if (!grafo[b]) grafo[b] = [];
    grafo[a].push(b);
    grafo[b].push(a);
  }

  const visitados = new Set();
  const componentes = [];

  for (const nodo of Object.keys(grafo)) {
    if (!visitados.has(Number(nodo))) {
      const componente = [];
      dfs(Number(nodo), visitados, componente);
      componentes.push(componente);
    }
  }

  const nodosSalvados = componentes
    .filter((componente) => componente.length < 3)
    .flat();

  return nodosSalvados.sort((a, b) => a - b);
}

const conexiones = [
  [1, 2],
  [2, 3],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
  [11, 12],
  [13, 14],
  [15, 16],
  [17, 18],
  [19, 20],
  [21, 22],
  [23, 24],
  [25, 26],
  [27, 28],
  [31, 32],
  [33, 34],
  [35, 36],
  [37, 38],
  [39, 40],
  [41, 42],
  [43, 44],
  [45, 46],
  [47, 48],
  [49, 50],
  [71, 72],
  [73, 74],
  [75, 76],
  [77, 78],
  [79, 80],
  [81, 82],
  [83, 84],
  [85, 86],
  [87, 88],
  [155, 156],
  [157, 158],
  [175, 176],
  [177, 178],
  [179, 180],
  [181, 182],
  [183, 184],
  [195, 196],
  [197, 198],
  [198, 199],
  [199, 200],
  [2, 4],
  [4, 6],
  [6, 8],
  [8, 10],
  [10, 12],
];

console.log(encontrarNodosSalvados(conexiones));
13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  155,
  156,
  157,
  158,
  175,
  176,
  177,
  178,
  179,
  180,
  181,
  182,
  183,
  184,
  195,
  196;
