import { Year } from './../js/year.js';

$(document).ready(function() {
  $('#birth-form').submit(function(event){
    event.preventDefault();
    // var simpleDate = new year();
    var seconds = simpleDate.calculateAge();
    $("#seconds").text(seconds);
    $("#output").text("hello");

  })
})
