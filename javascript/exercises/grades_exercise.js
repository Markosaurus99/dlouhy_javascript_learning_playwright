const pointsGained = 95;
const fullName = "Jaroslav Starý";
const minimalPoints = 75;
const redDiplomaPoints = 95;

if (pointsGained >= redDiplomaPoints) {
  console.log(`${fullName} prospěl/a s vyznamenáním.`);
} else if (pointsGained >= minimalPoints) {
  console.log(`${fullName} prospěl/a s ${pointsGained}`);
} else {
  console.log(
    `${fullName} neprospěl/a, chybělo mu/ji ${minimalPoints - pointsGained}`
  );
}
