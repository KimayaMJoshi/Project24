const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var side1,side2,side3;
var paper1;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    side1 = new Dustbin(700,360,70,70);
    side2 = new Dustbin(920,360,70,70);
    side3 = new Dustbin(810,390,290,10)
    ground = new Ground(600,height,1200,20);
    paper1 = new Paper(200,350);
    
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(side2.body.position.x);
    console.log(side2.body.position.y);
    console.log(side2.body.angle);
    side1.display();
    side2.display();
    side3.display();
    ground.display();
    paper1.display();
    
    
}
function keyPressed(){
    if (keyCode === UP_ARROW){

        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15})
    };

}