export class CarBlueprint {
  constructor(color, engine, fuelType, carName) {
    this.color = color;
    this.engine = engine;
    this.fuelType = fuelType;
    this.carName = carName;
    this.wheels = 4;
    console.log(
      `Auto "${this.carName}" bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.engine} \n\t - typ paliva: ${this.fuelType} \n\t - barva: ${this.color} \n\t - počet kol: ${this.wheels}`
    );
  }

  logCarProperties() {
    this.logDivider();
    console.log(
      `Informace o autě: ${this.carName}: \n\t motor: ${this.engine}, palivo: ${this.fuelType}, barva: ${this.color}, počet kol: ${this.wheels}`
    );
  }

  logDivider() {
    console.log("-----------");
  }

  repaint(newColor) {
    this.logDivider();
    console.log(
      `Auto ${this.carName} bylo přebarveno z ${this.color}, na ${newColor}`
    );
    this.color = newColor;
  }

  getColor() {
    return this.color;
  }
}
