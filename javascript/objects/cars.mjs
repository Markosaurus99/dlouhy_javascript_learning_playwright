import { CarBlueprint } from "./car_blueprint.mjs";

new CarBlueprint(
  "Červená",
  "1.6 TDI",
  "Diesel",
  "Lada Niva"
).logCarProperties(); // ? Provolání metody přímo po constructoru

const petrolCar = new CarBlueprint("Růžová", "1.4 HTP", "Benzín", "Fabia");
petrolCar.logCarProperties();
petrolCar.logDivider();
petrolCar.logCarProperties();

const electricCar = new CarBlueprint(
  "Modrá",
  "EV 160 KW",
  "Elektřina",
  "Blesk"
);
electricCar.logCarProperties();
electricCar.repaint("Fialová");
electricCar.logCarProperties();
petrolCar.logCarProperties();

const electricCar2 = electricCar;
electricCar2.repaint("Hnědá");

const electricCarColor = electricCar.getColor();
console.log(`Barva blesku: ${electricCarColor}`);
