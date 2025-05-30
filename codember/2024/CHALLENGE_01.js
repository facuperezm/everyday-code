// Desafío 2: Detectando acceso no deseado
// Creo que ΩMEGA está intentando entrar en el sistema. Por ahora, es un bebé y está siguiendo patrones muy sencillos que podemos detectar pero está intentando crear contraseñas de administrador para acceder a la terminal.

// ¿Cómo podemos detectar estos intentos de acceso? Está siguiendo estos patrones:

// · Sólo usa letras minúsculas y dígitos.
// · Nunca usa dígitos después de una letra (Una vez aparecen letras, la contraseña debe continuar solo con letras)
// · Si usa dígitos, siempre los usa de forma igual o creciente (si sale un 3, ya no usará después un número menor)
// · Si usa letras, siempre las usa en orden alfabético igual o creciente (si sale una "b" ya no podrá usar una "a", por ejemplo)
// Algunos ejemplos para que lo entiendas perfectamente:

// 1234     -> true
// abc      -> true
// aabbcc   -> true (repite pero siempre ascendente)
// 112233   -> true (repite pero siempre ascendente)
// a123     -> false (un número después de una letra)
// 123abc   -> true
// dbce     -> false (una "d" y después una "b")
// Accede a este log.txt con una lista de intentos y con un programa cuenta cuántos han sido inválidos y cuántos válidos. Envía la respuesta usando el comando submit.

// Por ejemplo, si hay 10 intentos válidos y 5 inválidos envía el comando submit 10true5false

const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "log.txt");

function isValidPassword(password) {
  let hasSeenLetter = false;
  let lastDigit = -1; // Para verificar números crecientes
  let lastLetter = ""; // Para verificar letras crecientes

  for (const char of password) {
    if (!isNaN(char)) {
      // Si el caracter es un digito
      const digit = Number(char);
      if (hasSeenLetter) return false; // No puede haber dígitos después de letras
      if (digit < lastDigit) return false; // No está en orden creciente
      lastDigit = digit; // Actualizar último dígito visto
    } else if (char >= "a" && char <= "z") {
      // Si el caracter es una letra
      hasSeenLetter = true;
      if (char < lastLetter) return false; // No está en orden alfabético creciente
      lastLetter = char; // Actualizar última letra vista
    } else {
      return false; // Caracter inválido (ni letra ni dígito)
    }
  }

  return true;
}

const logs = fs.readFileSync(logFilePath, "utf-8").split("\n");

let validCount = 0;
let invalidCount = 0;

for (const log of logs) {
  if (isValidPassword(log)) {
    validCount++;
  } else {
    invalidCount++;
  }
}

console.log(`submit ${validCount}true${invalidCount}false`);
