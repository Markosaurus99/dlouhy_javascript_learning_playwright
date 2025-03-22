function add(number1, number2) {
  const result = number1 + number2;
  console.log(`Výsledek sčítání je: ${result}`);
}
function subtract(number1, number2) {
  const result = number1 - number2;
  console.log(`Výsledek odečítání je: ${result}`);
}
function multiply(number1, number2) {
  const result = number1 * number2;
  console.log(`Výsledek násobení je: ${result}`);
}
function divide(number1, number2) {
  if (number2 === 0) {
    console.log("Chyba, nelze dělit nulou!");
  } else {
    const result = number1 / number2;
    console.log(`Výsledek dělení je: ${result}`);
  }
}

add(565, 584);
subtract(474, 520);
multiply(5822, 65);
divide(632, 0);
