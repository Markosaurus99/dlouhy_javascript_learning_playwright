export class Calculator {
  add(a, b) {
    const result = a + b;
    console.log(`Výsledek sčítání je: ${result}`);
    return result;
  }
  subtract(a, b) {
    const result = a - b;
    console.log(`Výsledek odečítání je: ${result}`);
    return result;
  }
  multiply(a, b) {
    const result = a * b;
    console.log(`Výsledek násobení je: ${result}`);
    return result;
  }
  divide(a, b) {
    if (b === 0) {
      console.log("Chyba, nelze dělit nulou!");
    } else {
      const result = a / b;
      console.log(`Výsledek dělení je: ${result}`);
      return result;
    }
  }
}
