const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stone ;
var slingshot;
var ground;
var stand , stand2;
var b1 , b2 , b3 , b4 , b5 , b6 , b7 , b8 , b9 , b10 , b11 , b12 , b13 , b14 , b15 , b16 , b17 , b18 , b19 , b20 , b21 , b22 , b23 , b24 , b25;
var score = 0;
var backgroundImage;
function preload()
{
  getTime()
}
function setup() {
  var canvas=createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;

   // dtone
   stone = new Stone(200 , 200 );

  // standss to hold the blocks
   stand = new Ground(500, 350 , 200 , 16);
   stand2 = new Ground(920 , 300 , 300 , 15);
   // blocks 
   ground = new Ground(600 , 390, 1200 , 50);
   b1 = new Box(500 , 260 , 35 , 45);
   b2 = new Box(460, 240 ,   35 , 45);
   b3 = new Box(420 , 240 , 35 , 45);
   b4 = new Box(540 , 240 , 35, 45);
   b5 = new Box(580 , 240 , 35 , 45);
   // second level
   b6 = new Box(460 , 185 , 35 , 45);
   b7 = new Box(500 , 185, 35 , 45);
   b8 = new Box(540 , 185 , 35 , 45);
   b9 = new Box(500 , 160 , 35 , 45);
   // next stand
   b10 = new Box(800 ,160 , 35 , 45);
   b11 = new Box(840 , 160 , 35 , 45);
   b12 = new Box(880 , 160 , 35 , 45);
   b13 = new Box(920  , 160 , 35 , 45);0,
   b14 = new Box(1000 , 160 , 35 , 45);
   b15 = new Box(960 , 160 , 35 , 45);
   b16 = new Box(1040 , 160 , 35 , 45);
   // second level 
   b17 = new Box(840, 150 , 35 , 45);
   b18 = new Box(880 , 150 , 35 , 45);
   b19 = new Box(920 , 150 , 35 , 45);
   b20 = new Box(960 , 150 , 35 , 45);
   b21 = new Box(1000 , 150,35 , 45);
   //third level
   b22 = new Box(880 , 140 , 35 , 45);
   b23 = new Box(920 , 140 , 35 , 45);
   b24 = new Box(960 , 140 , 35 , 45);
   //forth level
   b25 = new Box(920 , 130 , 35 , 45);

   slingshot = new SlingShot(stone.body,{x:200, y:50});

}

function draw() {
  createCanvas(1200,400)
  if(backgroundImage) 
  background(backgroundImage);

 

   Engine.update(engine);
  
  fill("black");
  textSize(20);
  text("Drag the polygon to hit the blocks.   Press space to play again.", 300 , 50);


   fill("green");
 textSize(36);
  text("SCORE :  " + score, 1000 , 50);
ground.display();
stone.display();
stand.display();
stand2.display();
fill("yellow");
b1.display();
b1.score();
b2.display();
b2.score();
b3.display();
b3.score();
b4.display();
b4.score();
b5.display();
b5.score();
fill("blue");
b6.display();
b6.score();
b7.display();
b7.score();
b8.display();
b8.score();
fill("green");
b9.display();
b9.score();
fill("lightBlue");
b10.display();
b10.score();
b11.display();
b11.score();
b12.display();
b12.score();
b13.display();
b13.score();
b14.display();
b14.score();
b15.display();
b15.score();
b16.display();
b16.score();
fill("grey");
b17.display();
b17.score();
b18.display();
b18.score();
b19.display();
b19.score();
b20.display();
b20.score();
b21.display();
b21.score();
fill("yellow")
b22.display();
b22.score();
b23.display();
b23.score();
b24.display();
b24.score();
fill(rgb (62 , 224 , 207));
b25.display();
b25.score();
slingshot.display();





 drawSprites();
}


function mouseDragged(){

  
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  

}


function mouseReleased(){
  slingshot.fly();

}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(stone.body);
  }
}
async function getTime() {
  
  var RESPONCE= await   fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var RESONCEjson = await RESPONCE.json();
  console.log(RESONCEjson)
    
  var time = RESONCEjson.datetime;
  console.log(time);

  var hr = time.slice(11,13);
  console.log(hr);

  if(hr >= 6 && hr <=18) {
      bg = "day.png";
  } else {
      bg = "night.jpg";

  }

  backgroundImage = loadImage(bg);
  console.log(backgroundImage)
}
