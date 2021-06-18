 const Engine= Matter.Engine;
 const World = Matter.World;
 const Bodies= Matter.Bodies;

var engine, world;
var stone, iron, rubber, hammer,plane;
var sand1, sand2, sand3, sand4, sands, sand6,sand7,sand8,sand9,sand10;

function setup() {
var canvas= createCanvas (1200,600); 
engine= Engine.create();
world= engine.world;

plane= new PLANE(600,height, 1200,20)
stone= new STONE(700,320,100,100);
iron= new IRON(300, 350);
rubber=new RUBBER(900,450,70); 
hammer =new HAMMER(10,100);

sand1= new SAND(505,450,10); 
sand2= new SAND (510,450, 10);
sand3= new SAND (515,450,10); 
sand4= new SAND (520,450,10);
sand5= new SAND(525,450,10);
sand6= new SAND (515,445,10);
sand7= new SAND (520,445,10);
sand8= new SAND (525,445,16);
sand9= new SAND (538,445,10);
sand10= new SAND (535,445,10);

}

function draw() {
background("lightBlue"); 
Engine.update(engine);

stone.display();
plane.display();
iron.display();
rubber.display();
hammer.display();
sand1.display();
sand2.display(); 
sand3.display();
sand4.display(); 
sand5.display();
sand6.display();
sand7.display();
sand8.display();
sand9.display(); 
sand10.display();

}

