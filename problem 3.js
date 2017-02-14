//Color Grid

function setup(){
createCanvas(400,400);

background(0);
}

var ellipseR = 15;
var ellipseX = 17;
var ellipseY = 17;



function draw(){


colorMode(HSB);



while (ellipseX<390){

     while (ellipseY<390){
     ellipse(ellipseX, ellipseY, ellipseR, ellipseR);
     ellipseY=ellipseY+16;
           fill(random(0,255),255,100);
     }
     ellipseY=18;
          ellipse(ellipseX, ellipseY, ellipseR, ellipseR);
     ellipseX=ellipseX+16
     }
}

