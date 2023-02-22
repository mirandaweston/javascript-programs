class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powermode = true
  }

  getTemperature() {
    return this.temperature
  }

  up() {
    if (this.powermode === true) {
      if (this.temperature <= 24) {
        this.temperature += 1;
      }
    } else {
      if (this.temperature <= 31) {
        this.temperature += 1;
      }
    }
    return this.temperature;
  }
}

module.exports = Thermostat;