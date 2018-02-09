import { Year } from './.js/year.js';

$(document).ready(function() {
  $('#birth-form').submit(function(event){
    event.preventDefault();
    var entry = $("#date").val();
    var simpleDate = new Year(entry);
    
  })
})

export class Year {
  constructor(day, month, year) {
    this.day;
    this.month;
    this.year;
  }

convert(current, year) {
  let yearsOnEarth = current -= year;
  return yearsOnEarth;
}




}
