import { Year } from './../js/year.js';

describe('Year' , function() {
  it ('should return number of seconds in given amount of years', function() {
    let year = 24;
    let sample = new Year(year);
    expect(sample.calculateAge()).toEqual(755308800); // not sure how to test without putting literal seconds in.
    expect(sample.calculateAge()).toEqual(year * 60 * 60 * 24 * 364.25); // tests the same thing just broken up.
  });

  // it ('should return number of Mercury Seconds are in earth seconds', function() {
  //   let year = 24;
  //   let sample = new Year(year);
  //   expect(sample.calculateMercuryAge()).toEqual(181274112);
  // });

  it('should return number of Mercury Years', function() {
    let year = 24;
    let sample = new Year(year);
    expect(sample.calculateMercuryAge()).toEqual((year * 60 * 60 * 24 * 364.25 * .24) * 0.0000000316887)
  })
});
