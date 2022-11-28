var robson, robsonImg, robsonImg2
var pao
var alface
var bacteria
var presunto
var sanduiche
var telaDeFundo
var parede1
var parede2
var parede3
var parede4
var bacteria1
var bacteria2
var bacteria3
var bacteria4
var paoImg
var alfaceImg
var presuntoImg
var sanduicheImg

function preload() {
	robsonImg = loadImage("robson.png")
	robsonImg2 = loadImage("robson2.png");
	paoImg = loadImage("pao.png");
	presuntoImg = loadImage("presuntinho.png");
	bacteria = loadImage("bacteria.png");
	alfaceImg = loadImage("alface.png");
	sanduicheImg = loadImage("sanduiche.png");
	telaDeFundo = loadImage("backGround.jpeg");

}

function setup(){
	createCanvas(windowWidth, windowHeight - 4);




	robson = createSprite(100, 100);
	robson.addImage("robson", robsonImg)
	robson.scale = 0.3
	robson.addImage("robson2", robsonImg2)
	robson.debug = true
	robson.setCollider("rectangle",0,0,200,350)


	pao = createSprite(400, 300);
	pao.addImage("pao", paoImg)
	pao.scale = 0.3

	alface = createSprite(1400, 300);
	alface.addImage("alface", alfaceImg)
	alface.scale = 0.2


	presunto = createSprite(1000, 700);
	presunto.addImage("presunto", presuntoImg)
	presunto.scale = 0.18


	parede1 = createSprite(windowWidth/2,windowHeight- 930,width, 20)
	parede2 = createSprite(windowWidth/2,windowHeight- 10,width, 20)
	parede3 = createSprite(windowWidth-10,windowHeight/2,20, height)
	parede4 = createSprite(windowWidth-1870,windowHeight/2,20, height)

	parede1.visible = false
	parede2.visible = false
	parede3.visible = false
	parede4.visible = false

}


function draw(){
	rectMode(CENTER);
	background(telaDeFundo);
	
	robson.collide(parede1)
	robson.collide(parede2)
	robson.collide(parede3)
	robson.collide(parede4)

	drawSprites();
	keyPressed();

	textSize(18)
	text("X: " + mouseX + "/ Y: " + mouseY, mouseX, mouseY);
}

function keyPressed(){
	if (keyIsDown(UP_ARROW)) {
		robson.y -= 5
	}

	if (keyIsDown(DOWN_ARROW)) {
		robson.y += 5
	}

	if (keyIsDown(LEFT_ARROW)) {
		robson.x -= 5
		robson.changeImage("robson2")
	}

	if (keyIsDown(RIGHT_ARROW)) {
		robson.x += 5
		robson.changeImage("robson")
	}
}

