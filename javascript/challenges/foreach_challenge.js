// Vytvoření dvou polí
const firstName = ["John", "Jane", "Alice", "Bob"];
const lastName = ["Doe", "Smith", "Johnson", "White"];

// Použití forEach pro iteraci a vypisování hodnot
firstName.forEach((name, index) => {
  console.log(`${name}, ${lastName[index]}`);
});
