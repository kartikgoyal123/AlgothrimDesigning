var fixedrect , movingrect ;
var r1,r2,r3,r4;

function setup() {
  createCanvas(600,600);
  fixedrect=createSprite(200,200,50,80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="green";
  //movingrect.debug=true;
  //fixedrect.debug=true;
  r1=createSprite(200,100,50,50);
  r1.shapeColor="green";
  r2=createSprite(300,100,50,50);
  r2.shapeColor="green";
  r3=createSprite(100,100,50,50);
  r3.shapeColor="green";
  r4=createSprite(250,300,50,50);
  r4.shapeColor="green"; 



}

function draw() {
  background(0,0,0);
  bounceOff(movingrect,fixedrect)  
  console.log(movingrect.x-fixedrect.x);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
  if(isTouching()){
    movingrect.shapeColor="blue";
    r1.shapeColor="blue";
  }
    else{
    movingrect.shapeColor="green";
    r1.shapeColor="green"; 
    }
  
  
  drawSprites();

}

function isTouching(movingrect,r1){
   
  if (movingrect.x - r1.x < r1.width/2 + movingrect.width/2
    && r1.x-movingrect.x < r1.width/2 + movingrect.width/2
    && movingrect.y - r1.y < r1.height/2 + movingrect.height/2 
    && r1.y - movingrect.y < r1.height/2 + movingrect.height/2) {
    return true;  
    
  }
  else{
    return false;
  }

  
}
