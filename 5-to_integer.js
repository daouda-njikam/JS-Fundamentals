const arg = process.argv[2];

// Convertir en entier avec parseInt
const num = parseInt(arg, 10);

// Vérifier si la conversion a réussi (num est un nombre et arg n’est pas undefined)
if (arg !== undefined && !isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
