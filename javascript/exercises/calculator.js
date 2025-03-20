function add(number1, number2) {
  const result = number1 + number2;
  console.log(result);
}
function subtract(number1, number2) {
  const result = number1 - number2;
  console.log(result);
}
function multiply(number1, number2) {
  const result = number1 * number2;
  console.log(result);
}
function divide(number1, number2) {
  if (number2 === 0) {
    console.log("Nejde dělit nulou");
  } else {
    const result = number1 / number2;
    console.log(result);
  }
}
add(15, 48);
subtract(98, 41);
multiply(54, 30);
divide(88, 6);

function exponentiation(base, exponent) {
  const result = base ** exponent;
  console.log(result);
}

exponentiation(3, 2);

console.log(0.1 * 0.2);
