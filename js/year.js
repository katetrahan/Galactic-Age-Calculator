export class Year {
  constructor(year) {
    this.year = year;

  }

  calculateAge() {
    const secondsInMinute = 60;
    const minutesInHour =60;
    const hoursInADay =24;
    const daysinAYear =364.25;

    let seconds = this.year * secondsInMinute * minutesInHour * hoursInADay * daysinAYear; // turns years into seconds
      console.log(seconds);
      return seconds;

    }

  calculateMercuryAge() {
    let mercuryYears = this.year / .24;
    console.log(mercuryYears);
    return mercuryYears;

    // math is wrong :(
    // const secondsInMinute = 60;
    // const minutesInHour =60;
    // const hoursInADay =24;
    // const daysinAYear =364.25;
    //
    // let mercurySeconds = this.year * secondsInMinute * minutesInHour * hoursInADay * daysinAYear * .24;
    // // return mercurySeconds;
    // let mercuryYears = Math.round(mercurySeconds * 0.0000000316887);
    // console.log(mercuryYears);
    // return mercuryYears;

  }

  // calculateVenusAge() {
  //   let venusYears = this.year / .62;
  //   return venusYears
  // }



}
