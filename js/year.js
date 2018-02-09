export class Year {
  constructor(year) {
    this.year = year;
  }

calculateAge() {
  let secondsInMinute = 60
  let minutesInHour =60
  let hoursInADay =24
  let daysinAYear =364.25

  let seconds = this.year * secondsInMinute * minutesInHour * hoursInADay * daysinAYear;
    return seconds
    console.log(seconds);
  }


}
