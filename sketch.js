
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var brick
var ball



function setup() {
  createCanvas(1200,600);
   

  engine = Engine.create();
  world = engine.world;

  
  
  box1=new Brick(200,500,100,100)
  ground= new Ground(600,550,1200,20)
  
  
  
  Engine.run(engine)
}


function draw() 
{
  rectMode(CENTER)
  background(51);
  Engine.update(engine);
  
  box1.display()
  ground.display()
}

