import { Year } from './.js/year.js';

$(document).ready(function() {
  $('#birth-form').submit(function(event){
    event.preventDefault();
    var entry = $("#date").val();
    var simpleDate = new Year(entry);
    
  })
})
