const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint;
var engine,world;
var score=0;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  block8=new Block(330,235,30,40);
  block9=new Block(360,235,30,40);
  block10=new Block(390,235,30,40);
  block11=new Block(420,235,30,40);
  block12=new Block(450,235,30,40);
  block13=new Block(360,235,30,40);
  block14=new Block(390,235,30,40);
  block15=new Block(420,235,30,40);
  block16=new Block(390,235,30,40);
  stand1=new Ground(380,280,310,20);
  stand2=new Ground(400,380,800,10);
  block1=new Block(100,230,15,15);
  sling=new SlingShot(block1.body,{x:110,y:250});
}

function draw() {
  background(0);  
  drawSprites();
Engine.update(engine);
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block1.display();
 block16.display();
 block8.score();
 block9.score();
 block10.score();
 block11.score();
 block12.score();
 block13.score();
 block14.score();
 block15.score();
 block1.score();
 block16.score();
stand1.display();
stand2.display();
sling.display();
text("Score:"+score,750,40);
textSize(20);

}
function mouseDragged(){
  Matter.Body.setPosition(block1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode===32){
    sling.attach(this.polygon);
  }
}