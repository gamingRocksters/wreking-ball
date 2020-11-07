const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10;
var box11,box12,box13,box14;
var ball;
var rope;

function setup(){
    var canvas = createCanvas(800,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,height-10,width,50);
    box1 = new Box(500,439,60,80);
    box2= new Box(500,410,60,80);
    box3= new Box(500,390,60,80);
    box4= new Box(500,350,60,80);
    box5= new Box(500,310,60,80);

    box6 = new Box(560,439,60,80);
    box7= new Box(560,410,60,80);
    box8= new Box(560,390,60,80);
    box9= new Box(560,350,60,80);
    box10= new Box(560,310,60,80);

    box11= new Box(620,410,60,80);
    box12= new Box(620,390,60,80);
    box13= new Box(620,350,60,80);
    box14= new Box(620,310,60,80);

    ball = new Ball(350,388,50,50);

    rope = new Rope(ball.body,{x:340, y:60});
    
}
function draw(){
    background(0);
    Engine.update(engine);
    text(mouseX+"."+mouseY,mouseX,mouseY);

    ground.show();
    box1.show();
    box2.show();
    box3.show();
    box4.show();
    box5.show();
    box6.show();
    box7.show();
    box8.show();
    box9.show();
    box10.show();
    box11.show();
    box12.show();
    box13.show();
    box14.show();
    ball.show();
     rope.show();

}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX ,y:mouseY});
}