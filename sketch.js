const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(777,77,17,50);
    rubber2 = new Rubber(700,77,17,50);
    rubber3 = new Rubber(500,77,17,50);
    rubber4 = new Rubber(770,90,17,50);
    rubber5 = new Rubber(200,150,17,50)
   
    box1 = new Stone(600,200,50,100);
    
  box2 = new Stone(400,100,80,40);
  box3 = new Stone(800,80,90,75);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    fill("green");
    rubber2.display();
    fill("yellow")
box1.xyz();
fill("cyan");
box2.xyz();
fill("violet");
rubber3.display();
fill("indigo");
box3.xyz();
fill("brown");
rubber4.display();
fill("pink");
rubber5.display();
    
 
}