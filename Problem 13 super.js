//balls change color on every wall bounce and cycles color otherwise

function setup() {
  createCanvas(400,400);
  background(255);
    fill(0);
    frameRate(30);
    colorMode(HSB); 
    fill(100,100,100);
    noStroke();
}
var h = 0;
var alth=50;
var x = 30;
var y = 20;
var velox=3;
var veloy=5

var altx=100;
var alty=20;
var altvelox=5;
var altveloy=2;

function velocityX(){
   if(x>380){
    velox=-1*velox;
    h+=100;
    }
    
    if(x<20){
    velox=-1*velox;
    h+=100;
    }
    if(altx>380){
    altvelox=-1*altvelox;
    alth+=100;
    }
    
    if(altx<20){
    altvelox=-1*altvelox;
    alth+=100;
    }
  x+=velox;
  altx+=altvelox;
 
}
function velocityY(){
  if(y>380){
    veloy=-1*veloy;
    h+=30;
  }
  if(y<20){
    veloy=-1*veloy;
    h+=100;
    
  }
  if(alty>380){
    altveloy=-1*altveloy;
    alth+=100;
  }
  if(alty<20){
    altveloy=-1*altveloy;
    alth+=100;
  }
   y+=veloy;
   alty+=veloy;
  
}
 
function draw() {
  background(255);
   fill(h,100,100);
  ellipse(x,y,30,30);
   fill(alth,100,100);
  ellipse(altx,alty,30,30);
  velocityX();
  velocityY();
  h+=1.5;
  alth+=.6;
  if(h>360){h=0;}
  if(alth>360){alth=0;}
  
  
}
