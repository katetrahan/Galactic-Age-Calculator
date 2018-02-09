export class Year {
  constructor(year) {
    this.year = year;
  }

calculateAge() {
  let secondsInMinute = 60; // variables because too many numbers are scary
  let minutesInHour =60;
  let hoursInADay =24;
  let daysinAYear =364.25;

  let seconds = this.year * secondsInMinute * minutesInHour * hoursInADay * daysinAYear; // turns years into seconds 
    console.log(seconds);
    return seconds;

  }



}
