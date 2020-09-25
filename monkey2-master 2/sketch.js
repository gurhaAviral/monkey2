
var monkey , monkey_running,player;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score, ground,groundImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}




function setup() {
createCanvas(400,400);
  
  //var monkey = createSprite(80,340,20,20);
  monkey = createSprite(80,340,20,20);
  monkey.addAnimation("running", monkey_running);  
  monkey.scale=0.1;


ground=createSprite(200,380,800 ,20); 
ground.x=ground.width/2; 
ground.velocityX=-4;
  

    
var invisibleground=createSprite(200,400,400,20); 
invisibleground.visible=false;  
  
var rand = Math.round(random(1,100));
console.log(rand);
  
  var survivalTime=0;
  
bananaGroup=new Group();  
obstacleGroup=new Group();   
 
//monkey.collide(ground);   
score=0;  
}

function draw() {
background("white");
  

if(ground.x<0){
 ground.x=ground.width/2 ; 
 }  
  
//text("score"+score,500,50);  
// score=score +(getFrameRate()/200); 
  
  
console.log("monkey runner")

  if(keyDown("space")) {
      monkey.velocityY= -12;
    }
 // monkey=12;
   
  monkey.velocityY=monkey.velocityY+0.8; 
  
  edges=createEdgeSprites(); 
   monkey.collide(ground);  
 
 spawnbanana();
 spawnObstacle();
   drawSprites();
  
survivalTime=Math.ceil(frameCount/frameRate())  
text("survival Time:" +survivalTime,100,50); 



if(obstacleGroup.isTouching(monkey)){  
ground.velocityX=0; 
monkey.velocityY=0;
banana.velocityX=0;
obstacle.velocityX=0;
text("Game Over", 165, 188);
textSize(12);  
fill(0);
 obstacleGroup.setvelocityXeach=0;
bananaGroup.setvelocityXeach=0;
obstacleGroup.setLifetimeEach(-1);
bananaGroup.setLifetimeEach(-1);
survivalTime=Math.ceil(frameCount/frameRate())  
text("survival Time:" +0 ,100,50); 




}
}

function spawnbanana()
  {
    if(frameCount %300 ===0)
    {
    banana=createSprite(300,300,20,10);
    banana.y=random(120,200);  
    banana.lifetime=300;
    monkey.depth= banana.depth+1;  
    banana.addImage(bananaImage);
    bananaGroup.add(banana);  
    banana.scale=0.1;  
    banana.velocityX=-2      ;  
    }
}
  
function spawnObstacle()
  {
    if(frameCount %300 ===0)
    {
    obstacle=createSprite(300,350,20,10);
    obstacle.addImage(obstacleImage);
    obstacle.lifetime=300;  
    //obstacleGroup.addobstacle();    
    
    obstacle.scale=0.1;  
    obstacle.velocityX=-2;
    obstacleGroup.add(obstacle);
  }
}  

  
  
  






  