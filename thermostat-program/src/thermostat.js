class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powermode = true
  }

  getTemperature() {
    return this.temperature
  }
}

module.exports = Thermostat;