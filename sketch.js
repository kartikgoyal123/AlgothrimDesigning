var fixedrect , movingrect ;
var r1,r2,r3,r4;

function setup() {
  createCanvas(600,600);
  fixedrect=createSprite(500,500,50,80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="green";
  //movingrect.debug=true;
  //fixedrect.debug=true;
  r1=createSprite(100,100,50,50);
  r1.shapeColor="green";
  r2=createSprite(200,100,50,50);
  r2.shapeColor="green";
  r3=createSprite(300,100,50,50);
  r3.shapeColor="green";
  r4=createSprite(400,100,50,50);
  r4.shapeColor="green"; 



}

function draw() {
  background(0,0,0);
  
  console.log(movingrect.x-fixedrect.x);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
  if(isTouching(movingrect,r1)){
    movingrect.shapeColor="blue";
    r1.shapeColor="blue";
  }
    else{
    movingrect.shapeColor="green";
    r1.shapeColor="green"; 
  }

  drawSprites();

}


