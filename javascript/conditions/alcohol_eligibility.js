const actualAge = 17;
const drinkingAgelimit = 18;
const fullName = "Josef Nový";

if (actualAge >= drinkingAgelimit) {
  console.log(`${fullName} už může pít alkohol.`); //template literál
} else if (actualAge >= 0) {
  console.log(
    `${fullName} nemůže pít alkohol, chybí mu ještě ${
      drinkingAgelimit - actualAge
    } rok/let`
  ); // console.log(fullName + " blablabla") alternativa template literálu, slučování stringů
} else {
  console.log("Neplatný věk.");
}

//* použití porovnávacích operátorů
// 7 == "7" ---> to je true, protože 2x = porovnává hodnotu
// 7 === "7" ---> false, protože 3x = porovnává i datový typ
