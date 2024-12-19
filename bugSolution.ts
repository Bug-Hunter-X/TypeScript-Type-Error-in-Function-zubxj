function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Or throw an error
  }
  return a + b;
}

let result1 = add(10, 20); // Correct usage
let result2 = addSafe("hello", "world"); // handles string input
let result3 = addSafe(10, "world"); // handles mixed type input