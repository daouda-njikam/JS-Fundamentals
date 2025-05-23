function add(a, b) {
  return a + b;
}

const arg1 = process.argv[2];
const arg2 = process.argv[3];

// On convertit en entier avec parseInt
const num1 = parseInt(arg1, 10);
const num2 = parseInt(arg2, 10);

// Si un des deux n'est pas un nombre, le résultat sera NaN automatiquement
console.log(add(num1, num2));
