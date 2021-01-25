
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var dustbinI;

function preload(){

}

function setup() {
	createCanvas(1300,600);
	fill("green");

	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100,5,40)
	groundObject=new ground(width/2,550,width,20);
	dustbin1=new Dustbin(1000,520);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paper.display();
	groundObject.display();
	dustbin1.display();
	
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:370,y:-370});
} 
 }
