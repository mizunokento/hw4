//Random Bars 

function setup() {
  createCanvas(400, 400);
     background(0);
     strokeWeight(3);
stroke(255, 204, 0);
      var lim=0;
var z=random(0,400);



function drawlines(){

     while(lim<400){
          line(lim,random(0,400),lim,400);
          lim+=5;
     }
}

drawlines();
}
