import { Year } from './../js/year.js';

describe('Year' , function() {
  it ('should return number of seconds in given amount of years', function() {
    let year = 24;
    let sample = new Year(year);
    expect(sample.calculateAge()).toEqual(755308800);
    expect(sample.calculateAge()).toEqual(year * 60 * 60 * 24 * 364.25);
  });
  it('should return number of Mercury Years', function() {
    let year = 24;
    let sample = new Year(year);
    expect(sample.calculateMercuryAge()).toEqual(Math.round(year / .24));
  });
  it('should return number of Venus Years', function() {
    let year = 24;
    let sample = new Year(year);
    expect(sample.calculateVenusAge()).toEqual(Math.round(year / .62));
    expect(sample.calculateVenusAge()).not.toEqual(24);
  });
  it('should return number of Mars Years', function() {
    let year = 24;
    let sample = new Year(year);
    expect(sample.calculateMarsAge()).toEqual(Math.round(year / 1.88));
  });
  it('should return number of Jupiter Years', function() {
    let year = 24;
    let sample = new Year(year);
    expect(sample.calculateJupiterAge()).toEqual(Math.round(year/ 11.86));
  });
  it('should return years left on earth', function() {
    let year = 24;
    let sample = new Year(year);
    expect(sample.calulateEarthLifeExpectancy()).toEqual(Math.round(71 - year))
  });
});
