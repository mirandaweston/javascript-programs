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

describe('up', () => {
  it('increases the temperature by 1 degree when powermode is on and temperature is lower than or equal to 24', () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 23;
    thermostat.powermode = true;
    expect(thermostat.up()).toBe(24);
  });
  
  it('increases the temperature by 1 degree when powermode is off and temperature is lower than or equal to 31', () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 30;
    thermostat.powermode = false;
    expect(thermostat.up()).toBe(31);
  });
  
  it('returns the temperature when powermode is on and temperature is higher than 24', () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 25;
    thermostat.powermode = true;
    expect(thermostat.up()).toBe(25);
  });
  
  it('returns the temperature when powermode is off and temperature is higher than 31', () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 23;
    thermostat.powermode = true;
    expect(thermostat.up()).toBe(24);
  });
  });

  describe('down', () => {
    it('decreases the temperature by 1 degree when temperature is higher than or equal to 10', () => {
      const thermostat = new Thermostat();
      thermostat.temperature = 11;
      expect(thermostat.down()).toBe(10);
    });
    
    it('returns the temperature when temperature is lower than 10', () => {
      const thermostat = new Thermostat();
      thermostat.temperature = 9;
      expect(thermostat.down()).toBe(9);
    });
  });

  describe('reset', () => {
    it('resets temperature to 20', () => {
      const thermostat = new Thermostat();
      thermostat.temperature = 25;
      thermostat.reset();
      expect(thermostat.getTemperature()).toBe(20);
    });
  });
});
