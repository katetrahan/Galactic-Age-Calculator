import { Year } from './../js/year.js';

$(document).ready(function() {
  $('#birth-form').submit(function(event){
    event.preventDefault();
    var entry = $("#age").val();
    var simpleDate = new Year(entry);
    var seconds = simpleDate.calculateAge(entry);
    var mercury = simpleDate.calculateMercuryAge(entry);
    var venus = simpleDate.calculateVenusAge(entry);
    $("#seconds").text(seconds);
    $(".mercury").text(mercury);
    $(".venus").text(venus);
    $("#output").text(entry);

  });
});
