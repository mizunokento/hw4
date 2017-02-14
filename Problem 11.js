//Animated Random Bars

function setup() {
  createCanvas(400, 400);
     background(0);
     strokeWeight(3);
     stroke(255, 204, 0);

     frameRate(3);
}



var lim=0;

function draw(){
     background(0);

     while(lim<400){
          line(lim,random(0,400),lim,400);
          lim+=5;
     }
     lim=0;



}
