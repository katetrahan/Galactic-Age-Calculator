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
  const secondsInMinute = 60; 
  const minutesInHour =60;
  const hoursInADay =24;
  const daysinAYear =364.25;

  let mercurySeconds = this.year * secondsInMinute * minutesInHour * hoursInADay * daysinAYear * .24;
  return mercurySeconds


}



}
