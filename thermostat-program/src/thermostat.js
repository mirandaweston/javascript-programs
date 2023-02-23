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

  down() {
    if (this.temperature >= 10) {
      return this.temperature -= 1;
    }
    else {
      return this.temperature
    }
  };

  reset() {
    return this.temperature = 20;
  }

  setPowerSavingMode(setting) {
    if (setting === true) {
      this.powermode = true
    }
    else {
      this.powermode = false
    }
  }
}

module.exports = Thermostat;