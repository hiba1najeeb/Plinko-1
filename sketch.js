const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var ground;
var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300 ;

function preload() {

bg = loadImage ("1.jpeg")

}



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
 ground = new Ground (width/2,795,480,10)
 for (var k =0 ; k <= width; k = k + 80) {
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
}
for (var i = 40 ; i <= width; i = i + 50){
  plinkos .push(new Plinko(i,75,10))
}
for (var i = 15 ; i <= width-10; i = i + 50){
  plinkos .push(new Plinko(i,175,10))
}
for (var i = 40 ; i <= width ; i = i + 50){
  plinkos .push(new Plinko(i,275,10))
}
for (var i = 15 ; i <= width ; i = i + 50){
  plinkos .push(new Plinko(i,375,10))
}

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();  
  if(frameCount%90===0){
    particles.push(new Particles(random(50,750),10,10))
  }
  for(var k = 0;k < divisions.length; k++){
    divisions[k].display();
    }
  for(var i = 0; i < plinkos.length; i++){
  plinkos[i].display();
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
    }
  drawSprites();
}