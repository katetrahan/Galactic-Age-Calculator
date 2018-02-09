export class Year {
  constructor(year) {
    this.year;
  }




calculateAge() {
  let secondsInMinute = 60
  let minutesInHour =60
  let hoursInADay =24
  let daysinAYear =364.25
  let days, hours, minutes, seconds, age;
  age = document.getElementById('age').values;

  if(age == null || age == '') {
    alert("please enter your age");

    let seconds = age * secondsInMinute * minutesInHour * hoursInADay * daysinAYear;
    document.getElementById('seconds').innerHTML = seconds;

  }
}





}
