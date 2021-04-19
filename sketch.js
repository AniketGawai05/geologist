const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Stone, iron,rubber, hammer;
var sand1,sand2,sand3,sand4,sand5,sand6;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);

    Stone = new Stone(700,320,100,100);
    iron = new Iron(300,350);
    rubber = new Rubber(900,450,70);
    hammer = new Hammer(10,100);


    sand1 = new Sand1(505,450,10);
    sand2 = new Sand(510,450,10);
    sand3 = new Sand(515,450,10);
    sand4 = new Sand(520,450,10);
    sand5 =  new Sand(525,450,10);
    sand6 = new Sand(515,445,10);
    sand7 = new Sand(520,445,10);
    sand8 = new Sand(525,445,10);
    sand9 = new Sand(530,445,10);
    sand10 = new Sand(535,445,10);   

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

     Stone.desplay();
     plane.display();
     hammer.display();
     iron.desplay();
    rubber.desplay();

sand1.desplay();
sand2.desplay();
sand3.desplay();
sand4.desplay();
sand5.desplay();
sand6.desplay();
sand7.desplay();
sand8.desplay();
sand9.desplay();
sand10.desplay();








 
}