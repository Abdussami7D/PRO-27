
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ROOF;
var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;




function preload()
{
	
}

function setup() {
	createCanvas(800, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ROOF = new roof(400,100,700,40);

    bob1 = new bob(300,680,50);
	chain1 = new Chain(ROOF.body,bob1.body,-100,0);

    bob2 = new bob(350,680,50);
	chain2 = new Chain(ROOF.body,bob2.body,-50,0);

	bob3 = new bob(400,680,50);
	chain3 = new Chain(ROOF.body,bob3.body,0,0);

	bob4 = new bob(450,680,50);
	chain4 = new Chain(ROOF.body,bob4.body,50,0);
	
	bob5 = new bob(500,680,50);
	chain5 = new Chain(ROOF.body,bob5.body,100,0);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ROOF.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:-100})
	}


}

