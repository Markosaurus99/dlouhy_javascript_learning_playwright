const cities = ["Praha", "Ostrava", "Brno", "Olomouc"];

console.log(cities);

//* Vypsání 3. prvku z pole cities, počítá se od 0
console.log(cities[2]);

//* Cyklení array ve foru
for (let i = 0; i < cities.length; i++) {
  console.log("Město: " + cities[i]);
}
