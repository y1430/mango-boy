const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint = Matter.Constraint;

var ground,tree; 
var m1,m2,m3,m4,m5,m6;
var stone,boy,launcher,world;
var launchingForce=100;

function preload()
{
  	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,600,1200,40);
	
	tree=new Tree(900,330,550,400);

	m1=new Mango(870,280,40,40);
	m2=new Mango(840,230,40,40);
	m3=new Mango(920,170,40,40);
	m4=new Mango(950,120,40,40);
	m5=new Mango(970,260,40,40);
	m6=new Mango(970,190,40,40);

	stone=new Stone(200,280,30);

  launcher=new Launcher(stone.body,{x:235,y:420});
var render=Render.create({
  element:document.body,
  engine:engine,
  options:{
    width:1300,
    height:600,
    wireframes:false
  }
});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  textSize(230);
  text("Press Space to get a scond chance to play!!",50,50);
  image(boy,200,340,200,300);

  ground.display();
  tree.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  stone.display();
 //boy.display();
 launcher.display();

 detectCollision(stone,m1);
 detectCollision(stone,m2);
 detectCollision(stone,m3);
 detectCollision(stone,m4);
 detectCollision(stone,m5);
 detectCollision(stone,m6);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function keyPressed() {
  if (keyCode===32){
    Matter.Body.setPosition(stone,{x:235,y:420});
    launcher.attach(stone.body);
  }
}

function detectCollision(lstone,lmango) {
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.X,mangoBodyPosition.y);

  if (distance<=lmango.r+lstone.r) {
    Matter.Body.setStatic(lmango.body,false); 
  }
}


