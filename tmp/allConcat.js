import { Year } from './../js/year.js';

$(document).ready(function() {
  $('#birth-form').submit(function(event){
    event.preventDefault();
    var entry = $("#age").val();
    var simpleDate = new Year(entry);
    var seconds = simpleDate.calculateAge(entry);
    var mercury = simpleDate.calculateMercuryAge(entry);
    var venus = simpleDate.calculateVenusAge(entry);
    var mars = simpleDate.calculateMarsAge(entry);
    var jupiter = simpleDate.calculateJupiterAge(entry);
    $("#seconds").text(seconds);
    $(".mercury").text(mercury);
    $(".venus").text(venus);
    $(".mars").text(mars);
    $(".jupiter").text(jupiter);
    $("#output").text(entry);

  });
});
