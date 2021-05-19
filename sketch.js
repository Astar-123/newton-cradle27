
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new ground(300, 50, 500, 20);
	bob= new Bob(50,500, 50);
	rope=new Rope( bob.body, {x:100,y:50});
	bob2= new Bob(100,500, 50);
	rope2=new Rope( bob2.body, {x:200,y:50});
	bob3= new Bob(150,500, 50);
	rope3=new Rope(bob3.body,{x:300,y:50});
	bob4=new Bob(200,500,50);
	rope4=new Rope(bob4.body, {x:400,y:50});
	bob5=new Bob(250,500,50);
	rope5=new Rope(bob5.body, {x:500,y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}



