function setup(){
createCanvas(400,400);
background(0);
}

function draw(){

var ellipseR = 15;
var ellipseX = 17;
var ellipseY = 17;

fill(255);


while (ellipseX<390){

     while (ellipseY<390){
     ellipse(ellipseX, ellipseY, ellipseR, ellipseR);
     ellipseY=ellipseY+16
     }
     ellipseY=18;
          ellipse(ellipseX, ellipseY, ellipseR, ellipseR);
     ellipseX=ellipseX+16
     }
}
