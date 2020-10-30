var PLAY = 1;
var OVER = 0;
var gamestate = PLAY;

var score = 0;

var fruit,fruit1,fruit2,fruit3,fruitGroup;
var enemy,enemy1,enemyGroup;

var gameOver,gameoverImg;

var sword,swordImg;

var b,Bgroup;
var e,Egroup;


function preload(){
  fruit = loadImage("fruit1.png");
  fruit1 = loadImage("fruit2.png");
  fruit2 = loadImage("fruit3.png");
  fruit3 = loadImage("fruit4.png");
  
  enemy = loadImage("alien1.png");
  enemy1 = loadImage("alien2.png");
  
  gameOverImg = loadImage("gameover.png");
  
  swordImg = loadImage("sword.png");
}
 
function setup() {
  createCanvas(400, 400);
  gameOver = createSprite(200,200,400,400);
  gameOver.addImage("over",gameOverImg);
  gameOver.visible = false;
  sword = createSprite(100,100,10,10);
  sword.addImage("s",swordImg);
  
  Bgroup = new Group();
  Egroup = new Group();
}

function draw() {
  background("brown");
  if(gamestate === PLAY){
  
  text("score "+ score,340,50);
  
  
  
  fallingfruit();
  fallingenemy();
  
  if(Bgroup.isTouching(sword) ){
    Bgroup.destroyEach();
    b.lifetime = 0;
    score = score +1;
  }
  if(sword.isTouching(Egroup)){
    gamestate = OVER;
  }
  if(score % 4 === 0){
    Bgroup.velocityY = Bgroup.velocityY + 2;
  }
  if(score % 5 === 0){
    Egroup.veloityY = Egroup.velocityY + 3;
  }
  
  sword.x = mouseX;
  sword.y = mouseY;
 
  }
  if(gamestate === OVER){
    b.velocityY = 0;
    
    sword.x = sword.x;
    sword.y = sword.y;
    
    b.velocity.y = 0;
    e.velocity.y = 0;
    
   gameOver.visible = true;
    
  }
  
  
  
  
  
  drawSprites();
}

 function fallingfruit(){
  if (frameCount % 100 === 0 ){
    
  b = createSprite(20,1,20,20);
    b.lifetime = 85;
    
  b.x = Math.round(random(20,300));
    
    b.velocityY = 5;
    
 
    var r = Math.round(random(1,4))
    switch(r) {
      case 1:b.addImage("fruit", fruit);
             b.scale = 0.3;
             break;
      case 2:b.addImage("fruit", fruit1);
             b.scale = 0.3;
             break;
      case 3:b.addImage("fruit", fruit2);
             b.scale = 0.2;
             break;
      case 4:b.addImage("fruit", fruit3);
             b.scale = 0.2;
             break;
      default:break;     
      
    }
      Bgroup.add(b);
   }     
 }
      function fallingenemy(){
  if (frameCount % 200 === 0 ){
    
  e = createSprite(20,1,20,20);
    
  e.x = Math.round(random(20,300));
    
    e.velocityY = 3;
    
 
    var r = Math.round(random(1,4))
    switch(r) {
      case 1:e.addImage("enemy", enemy);
             e.scale = 1;
             break;
      case 2:e.addImage("enemy", enemy1);
             e.scale = 2;
             break;
      default:break;     
      
    }
      Egroup.add(e);
   }     
}