const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , ground1,box2,pig1,log,box3,box4,pig2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(850,550,60,60);
    ground1=new Ground(600,600,1200,30);
    box2=new Box(1050,550,60,60);
    pig1=new Pig(950,550);
    log=new Log(950,450,270,PI/2);
    box3=new Box(850,100,60,60);
    box4=new Box(1050,100,60,60);
    pig2=new Pig(950,100);

}


function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    box2.display();
    pig1.display();
    log.display();
    box3.display();
    box4.display();
    pig2.display();
}