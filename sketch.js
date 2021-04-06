const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bird, elephant, doggy, oneeye, robot, tiger;

var ocean, ocean2, startingGround, startScreen, 
skip, quit, challangeScreen, background, 
leaderBoard, help, heart,characterScreen;

var blocks=[];

function preload() {
ocean_png=loadImage("images/ocean.png")
startScreen_png=loadImage("images/startScreen.png")
skip_png=loadImage("images/skip.png")
quit_png=loadImage("images/quit.png")
challengeScreen_png=loadImage("images/challengeScreen.png")
Background_png=loadImage("images/Background.png")
leaderBoard_png=loadImage("images/leaderBoard.png")
help_png=loadImage("images/help.png")
heart_png=loadImage("images/heart.png")
blocks_png=loadImage("images/blocks.png")
characterScreen_png=loadImage ("images/characterScreen.png")

bird_png=loadImage("characters/bird.png")
elephant_png=loadImage("characters/elephant.png")
doggy_png=loadImage("characters/doggy.png")
oneeye_png=loadImage("characters/oneeye.png")
robot_png=loadImage("characters/robot.png")
tiger_png=loadImage("characters/tiger.png")
}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

var ocean=createSprite(200,250,10,10);
ocean.addImage(ocean_png);
ocean.scale=1.5

var ocean2=createSprite(600,250,10,10);
ocean2.addImage(ocean_png);
ocean2.scale=1.5

  startingGround=new Ground(403,273,400,40);
  player=new Bird(400, 200, 50)
console.log(startingGround);

//block=new Blocks(270,231,100,30);

var score=0; 
}

function draw() {
  background(Background_png);  
  Engine.update(engine);
   
  if(frameCount%100===0){
    blocks.push(new Blocks(random(270,370),231,100,30));
   // Matter.Body.setVelocity(blocks.body, {x:0, y:8});
  }

  for (var b = 0; b < blocks.length; b++) {
    blocks[b].display();
    }

startingGround.display();
player.display();

  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY);

function keyPressed(){
  if(keyCode === 32){
  Matter.Body.setVelocity(player.body, {x:0, y:8}); 
  }
  }
 }