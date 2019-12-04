function preload() {
	arcadeFont = loadFont('ARCADECLASSIC.otf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	textSize(100);
	textFont(arcadeFont);
}

function draw() {
	background(100);
	text('hello world', 0, 0, width, height);
}