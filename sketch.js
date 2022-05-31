const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var background_img;
var girl, girl_img;
var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

function preload(){
  background_img = loadImage("snow1.jpg");
  girl_img = loadImage("girl.png");

}

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  girl = createSprite(400, 200, 50, 50);
  girl.addImage(girl_img);
  girl.scale = 0.7;

  s1= new Snow(random(0,800),random(0,400),60,60);
  s2= new Snow(random(0,800),random(0,400),60,60);
  s3= new Snow(random(0,800),random(0,400),60,60);
  s4= new Snow(random(0,800),random(0,400),60,60);
  s5= new Snow(random(0,800),random(0,400),60,60);
  s6= new Snow(random(0,800),random(0,400),60,60);
  s7= new Snow(random(0,800),random(0,400),60,60);
  s8= new Snow(random(0,800),random(0,400),60,60);
  s9= new Snow(random(0,800),random(0,400),60,60);
  s10= new Snow(random(0,800),random(0,400),60,60);
}

function draw() {
  background(background_img);
  drawSprites();

  Engine.update(engine);

  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();
  s8.display();
  s9.display();
  s10.display();
    
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    girl.x = girl.x-10;
  }

  if(keyCode === RIGHT_ARROW){
    girl.x = girl.x+10;
  }

  if(keyCode === UP_ARROW){
    girl.y = girl.y-10;
  }

  if(keyCode === DOWN_ARROW){
    girl.y = girl.y+10;
  }
}

