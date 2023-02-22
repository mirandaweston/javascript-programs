const Thermostat = require('../src/thermostat');

describe('Thermostat', () => {

  describe('getTemperature', () => {
    it('constructs with a default temperature of 20', () => {
      const thermostat = new Thermostat();
      expect(thermostat.getTemperature()).toBe(20);
    });

  it('returns the temperature', () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 10;
    expect(thermostat.getTemperature()).toBe(10);
  });
});
});
