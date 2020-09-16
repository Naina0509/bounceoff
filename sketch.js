var fixedRect, movingRect;
var rect1,rect2;
var r,b;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect1 = createSprite(0, 200, 50, 80);
  rect1.shapeColor = "green";
  rect1.debug = true;
  rect1.velocityX = +5;

  rect2 = createSprite(400, 200, 50, 80);
  rect2.shapeColor = "green";
  rect2.debug = true;
  rect2.velocityX = -5;

r = createSprite(300,100,20,20);
b = createSprite(100,100,20,20);


}

function draw() {
  background(0,0,0); 
  b.x = World.mouseX; 

  bounceOff(movingRect,fixedRect);
  bounceOff(rect1,rect2);

  if(isTouching(r,b)){
    r.shapeColor = "pink";
    b.shapeColor = "pink";
  }

  drawSprites();
}








