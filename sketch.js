
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1= new Ground(800,650,20,20); 
	paper1= new Paper(400,600,10,10); 
	dustbin1= new Dustbin(400,200,20,100); 
	dusbin2= new Dustbin(400,620,200,20); 
	dustbin3= new Dustbin(400,400,20,100); 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  paper1.display(); 
  dustbin1.display();
  dusbin2.display();
  dustbin3.display(); 
  keyPressed(); 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85, y:-85})
	}

}


