var bg,bgImg1,bgImg2;
var backButton,backButtonImg;
var startButton,startButtonImg;
var visionButton,colorButton,exerciseButton,infoButton;
var visionButtonImg,colorButtonImg,exerciseButtonImg,infoButtonImg;
var gameState="start";

//exercise
var circle,ball;
var circleImg,ballImg;

function preload() {
  bgImg1=loadImage("bg1.png");
  bgImg2=loadImage("bg2.png");
  visionButtonImg=loadImage("vblock.png");
  colorButtonImg=loadImage("cblock.png");
  exerciseButtonImg=loadImage("eblock.png");
  infoButtonImg=loadImage("Iblock.png");
//exercise
  circleImg=loadImage("circle.png");
  ballImg=loadImage("ball.png");

  backButtonImg=loadImage("backButton.png");
  startButtonImg=loadImage("nextButton.png");
}







function setup() {
  createCanvas(displayWidth-50,displayHeight-200);

  bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  bg.addImage("bg1",bgImg1);
  bg.scale=0.7;
  
  visionButton=createSprite(200,370,100,100);
  visionButton.addImage(visionButtonImg);
  visionButton.scale=0.9;
  visionButton.visible=false;
  

  colorButton=createSprite(520,350,100,100);
  colorButton.addImage(colorButtonImg);
  colorButton.visible=false;
  colorButton.scale=1.1;

  exerciseButton=createSprite(850,350,100,100);
  exerciseButton.addImage(exerciseButtonImg);
  exerciseButton.visible=false;
  exerciseButton.scale=0.9;

  infoButton=createSprite(1150,350,100,100);
  infoButton.addImage(infoButtonImg);
  infoButton.visible=false;
  infoButton.scale=0.65;

  backButton=createSprite(100,100,100,100);
  backButton.addImage(backButtonImg);
  backButton.visible=false;
  backButton.scale=0.4;

  
  startButton=createSprite(1100,300,100,100);
  startButton.addImage(startButtonImg);
  startButton.visible=false;
  startButton.scale=0.4;

  //exercise
  circle=createSprite(600,286);
  circle.addImage(circleImg);
  circle.scale=1.4;
  circle.visible=false;

  ball=createSprite(530,70);
  ball.addImage(ballImg);
  ball.scale=0.7;
  ball.visible=false;
  ball.rotation = 180;
  ball.rotateToDirection=true;
  ball.velocityX = 4;
  
}





function draw() {
  background(0);  
  drawSprites();
  if(gameState==="start"){
    start();
   
  }
  else if(gameState==="ex1"){
    exercise1();
  }
  else if(gameState==="ex2"){
    exercise2();
  }
  
  console.log(mouseX,mouseY);
}







function start(){

  visionButton.visible=true;
  colorButton.visible=true;
  exerciseButton.visible=true;
  infoButton.visible=true;

  backButton.visible=false;

  circle.visible=false;
  ball.visible=false;
  startButton.visible=false;
 

  bg.addImage("bg1",bgImg1);
  bg.changeImage("bg1",bgImg1);

  textSize(10);
  fill("yellow");
  textFont("Arials");
  text("VISION CARE",200,300);

  textSize(25);
  fill("black");
  textFont("Georgia");
  text("VISION CHECK",100,520);

  textSize(25);
  fill("black");
  textFont("Georgia");
  text("COLOUR VISION",450,520);

  textSize(25);
  fill("black");
  textFont("Georgia");
  text("EYE MUSCLES",800,520);
  text("EXERCISE",825,550);

  textSize(25);
  fill("black");
  textFont("Georgia");
  text("INSTRUCTIONS",1080,520);

  visionButton.rotation=visionButton.rotation+2;
  colorButton.rotation=colorButton.rotation+2;
  exerciseButton.rotation=exerciseButton.rotation+2;
  infoButton.rotation=infoButton.rotation+2;

  if(mousePressedOver(exerciseButton)){
    gameState="ex1";
  }
}

function exercise1(){

  visionButton.visible=false;
  colorButton.visible=false;
  exerciseButton.visible=false;
  infoButton.visible=false;
  backButton.visible=true;
  //exercise

  bg.addImage("bg2",bgImg2);
  bg.changeImage("bg2",bgImg2);


  circle.visible=true;
  ball.visible=true;


  if(mousePressedOver(backButton)){
    gameState="start";
  }

    startButton.visible=true;
    ball.rotation=ball.rotation+1;

    if(mousePressedOver(startButton)){
      gameState="ex2";
    }
}

function exercise2(){


  visionButton.visible=false;
  colorButton.visible=false;
  exerciseButton.visible=false;
  infoButton.visible=false;
  backButton.visible=true;
  //exercise
  circle.visible=false;
  ball.visible=false;
  startButton.visible=true;

  if(mousePressedOver(backButton)){
    gameState="start";
  }

  

}

