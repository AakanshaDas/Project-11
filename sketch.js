var path;
var boy;

function preload(){
  //pre-load images
  path.loadImage("path.png")
  boy.loadImage("Runner-1.png","Runner-2.png")
}


function setup(){
  createCanvas(400,400);

  //create sprites here
  path = createSprite (200,200,20,200);
  path.addImage("path.png")
  path.velocityY=2;
  path.scale=1.2;

  boy = createSprite (200,200,30,20);
  boy.addImage("Runner-1.png","Runner-2.png")
  boy.velocityY=2;
  boy.scale=1.2;
}

function draw() {
  background("white");
  if(path.y>400){
    path.y=height/2
  }

  if(boy.y>400){
    boy.y=height/2
  }
  
drawSprites();
}
