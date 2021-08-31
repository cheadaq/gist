'use strict';

var sun = new Image();
var moon = new Image();
var earth = new Image();
sun.src = 'images/Canvas_sun.png';
moon.src = 'images/Canvas_moon.png';
earth.src = 'images/Canvas_earth.png';

function draw() {
    var canvas = document.getElementById('canvas'); // HTMLCanvasElement
    var ctx = canvas.getContext('2d'); // CanvasRenderingContext2D
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 300, 300);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    ctx.save();
    ctx.translate(150, 150);

    // earth
    var time = new Date();
    var angle = ((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI)/60000) * time.getMilliseconds();
    ctx.rotate(angle);
    
    //console.log("earch rotate angle", angle);
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 50, 24); // shadow
    ctx.drawImage(earth, -12, -12);

    // moon
    ctx.save();
    angle = ((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI)/6000) * time.getMilliseconds();
    ctx.rotate(angle);
    //console.log("moon rotate angle", angle);
    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();

    ctx.restore();
    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI*2, false); // earch orbit
    ctx.stroke();
    ctx.drawImage(sun, 0, 0, 300, 300);

    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);