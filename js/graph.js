'use strict';

var forecast = [18, 20, 18, 20, 18, 20, 17];

function draw(data) {
  var canvas = getElementById('graph');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.fill();
  }
}

window.onload = draw.bind(null, forecast);
