var fixedRect;
var movingRect;
var ball1;
var ball2;
var rect3;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 30, 80);
  movingRect=createSprite(200,200,80,30);
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
  ball1=createSprite(0,100,20,10);
  ball2=createSprite(400,100,20,10);
  ball1.velocityX=2;
  ball2.velocityX=-2;
  rect3=createSprite(300,380,80,30);
  rect3.shapeColor="blue";
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 

  if(isTouching(rect3,movingRect)){
    rect3.shapeColor="green";
    movingRect.shapeColor="green";

  }
  else{
    rect3.shapeColor="blue";
    movingRect.shapeColor="red";
  }
  

  bounceOff(ball1,ball2);

  drawSprites();
}

function isTouching(o1,o2){
  if(o1.width/2+o2.width/2>o2.x-o1.x && 
    o1.width/2+o2.width/2>o1.x-o2.x && 
    o1.height/2+o2.height/2>o2.y-o1.y &&
    o1.height/2+o2.height/2>o1.y-o2.y){
    return true;
  }
  else{
    return false;
  }
}

function bounceOff(o1,o2){
  if(o1.width/2+o2.width/2>o2.x-o1.x &&
    o1.width/2+o2.width/2>o1.x-o2.x){
      o1.velocityX=o1.velocityX*(-1);
      o2.velocityX=o2.velocityX*(-1);
    }

    if(o1.height/2+o2.height/2>o2.y-o1.y && 
      o1.height/2+o2.height/2>o1.y-o2.y){
        o1.velocityY=o1.velocityY*(-1);
        o2.velocityY=o2.velocityY*(-1);
      }
}