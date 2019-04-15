var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


// c.fillStyle = 'rgba(255, 0, 0, 0.5';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5';
// c.fillRect(200, 200, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5';
// c.fillRect(300, 300, 100, 100);


// // Line
// c.beginPath();
// c.moveTo(150, 50);

// c.lineTo(200, 100);
// c.lineTo(300, 200);
// c.lineTo(400, 300);
// c.lineTo(500, 400);
// c.lineTo(400, 500);
// c.lineTo(300, 400);
// c.lineTo(200, 300);
// c.lineTo(100, 200);
// c.lineTo(50, 150);
// c.strokeStyle = '#fa34a3';
// c.stroke();



// Sahovnica
// c.fillStyle = 'rgb(255, 0, 0)';
// c.fillRect(100, 200, 100, 100);
// c.fillRect(300, 200, 100, 100);
// c.fillRect(500, 200, 100, 100);

// c.fillRect(200, 300, 100, 100);
// c.fillRect(400, 300, 100, 100);

// c.fillRect(100, 400, 100, 100);
// c.fillRect(300, 400, 100, 100);
// c.fillRect(500, 400, 100, 100);

// c.fillRect(200, 500, 100, 100);
// c.fillRect(400, 500, 100, 100);

// c.fillRect(100, 600, 100, 100);
// c.fillRect(300, 600, 100, 100);
// c.fillRect(500, 600, 100, 100);


// c.beginPath();
// c.moveTo(90, 190);

// c.lineTo(90, 710);
// c.lineTo(610, 710);
// c.lineTo(610, 190);
// c.lineTo(90, 190);
// c.strokeStyle = 'rgb(255, 0, 0)';
// c.stroke();


// Arc // Circle

// c.beginPath();
// c.arc(x, y, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();


// for (var i = 0; i < 500; i++) {

// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	var color = Math.floor(Math.random() * 255);
	


// 	c.beginPath();
// c.arc(x, y, 10, 0, Math.PI * 2, false);
// c.strokeStyle = 'rgb(' + color + ', ' + color + ', ' + color + ')';
// c.stroke();
// }

var mouse = {
	x: undefined,
	y: undefined
}


var maxRadius = 100;
// var minRadius = 2;

var colorArray = [
	'#B35936',
	'#FFA480',
	'#FF9166',
	'#24B39B',
	'#66FFE5',
];

window.addEventListener('mousemove', 
	function(event) {
	mouse.x = event.x;
	mouse.y = event.y;
});

window.addEventListener('resize', 
	function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
});

function Circle(x, y, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
	}

	this.update = function() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
	this.dx = -this.dx;
}

if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
	this.dy = -this.dy;
}

this.x += this.dx;
this.y += this.dy;

// Interactivity
if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
	if (this.radius < maxRadius) {
		this.radius += 1;
	}
} else if (this.radius > this.minRadius) {
	this.radius -= 1;
}

this.draw();
	}
}

var circleArray = [];

function init() {
	
	circleArray = [];

for (var i = 0; i < 800; i++) {
	var radius = Math.random() * 3 + 1;
	var x = Math.random() * (innerWidth - radius * 2) + radius;
	var y = Math.random() * (innerHeight - radius * 2) + radius;
	var dx = (Math.random() - 0.5) * 5;
	var dy = (Math.random() - 0.5) * 5;
	circleArray.push(new Circle(x, y, dx, dy, radius));
}
}


function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();
init();














