//Problem 4 corrected

function setup(){
createCanvas(400,400);

background(0);
}

var ellipseR = 15;
var ellipseX = 17;
var ellipseY = 17;
var HUE=0;


function draw(){


colorMode(HSB);



while (ellipseY<390){

     while (ellipseX<390){
     ellipse(ellipseX, ellipseY, ellipseR, ellipseR);
     ellipseX=ellipseX+16;
           fill(HUE,255,100);
          HUE+=.6;
     }
     ellipseX=18;
          ellipse(ellipseX, ellipseY, ellipseR, ellipseR);
     ellipseY=ellipseY+16
     }
}
