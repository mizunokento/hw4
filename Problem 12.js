//Tracking lines trippy colors 

function setup() {
  createCanvas(400, 400);
     background(0);
     frameRate(10);
     colorMode(HSB);
}



     var i=10;
var HUE=0;


function draw(){     

     strokeWeight(4);
     stroke(0,0,0);
     line(i,0,i,400);
     stroke(HUE, 255, 100);
     line(i,mouseY,i,400);
       i+=10;

HUE=HUE+2;
     if (HUE>255){
          HUE=0;}
          if(i>=400){
               i=0;}

     }
