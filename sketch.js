var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var obstacle, obstacleGroup, oImage1, oImage2, oImage3, oImage4, oImage5, oImage6;


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 oImage1 = loadImage("obstacle1.png")
 oImage2 = loadImage("obstacle2.png")
 oImage3 = loadImage("obstacle3.png")
 oImage4 = loadImage("obstacle4.png")
 oImage5 = loadImage("obstacle5.png")
 oImage6 = loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
}

function draw() {
  background(180);
  
  
  
  if(keyDown("space") && trex.y>=100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstacles();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    cloud.lifetime = 210
    }
}

function spawnObstacles() {
  if (frameCount % 80 === 0) {
    obstacle = createSprite(600,160,40,10);
    obstacle.velocityX = -3
    var rand = Math.round(random(1,6))
    switch(rand) {
      case 1 : obstacle.addImage(oImage1)
      break;
      case 2 : obstacle.addImage(oImage2)
      break;
      case 3 : obstacle.addImage(oImage3)
      break;
      case 4 : obstacle.addImage(oImage4)
      break;
      case 5 : obstacle.addImage(oImage5)
      break;
      case 6 : obstacle.addImage(oImage6)
      break;
      default:break
    }
    obstacle.scale = 0.6
    obstacle.lifetime = 210
}
}