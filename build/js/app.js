(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Year = exports.Year = function () {
  function Year(year) {
    _classCallCheck(this, Year);

    this.year = year;
  }

  _createClass(Year, [{
    key: "calculateAge",
    value: function calculateAge() {
      var secondsInMinute = 60;
      var minutesInHour = 60;
      var hoursInADay = 24;
      var daysinAYear = 364.25;

      var seconds = this.year * secondsInMinute * minutesInHour * hoursInADay * daysinAYear;
      console.log(seconds);
      return seconds;
    }
  }]);

  return Year;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _year = require('./../js/year.js');

$(document).ready(function () {
  $('#birth-form').submit(function (event) {
    event.preventDefault();
    var entry = $("#age").val();
    var simpleDate = new _year.Year(entry);
    var seconds = simpleDate.calculateAge(entry);
    $("#seconds").text(seconds);
    $("#output").text(entry);
  });
});

},{"./../js/year.js":1}]},{},[2]);
