export class Year {
  constructor(year) {
    this.year = year;

  }
  calculateAge() {
    const secondsInMinute = 60;
    const minutesInHour =60;
    const hoursInADay =24;
    const daysinAYear =364.25;

    let seconds = this.year * secondsInMinute * minutesInHour * hoursInADay * daysinAYear;
      console.log(seconds);
      return seconds;
    }
  calculateMercuryAge() {
    let mercuryYears = Math.round(this.year / .24);
    console.log(mercuryYears);
    return mercuryYears;
  }
  calculateVenusAge() {
    let venusYears = Math.round(this.year / .62);
    console.log(venusYears);
    return venusYears;
  }
  calculateMarsAge() {
    let marsYears = Math.round(this.year / 1.88);
    console.log(marsYears);
    return marsYears;
  }
  calculateJupiterAge() {
    let jupYears = Math.round(this.year / 11.86);
    console.log(jupYears);
    return jupYears;
  }
  calulateEarthLifeExpectancy() {
    let earthLifeExpectancy = 71 - this.year;
    return earthLifeExpectancy
  }
  calculateLifeExpectancyonMercury() {
    const averageLifeOnMercury = Math.round(this.year / .62);
    let mercuryLifeExpectancy = this.year - averageLifeOnMercury;
  }
}
