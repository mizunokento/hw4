//using different statements

function setup() {
  createCanvas(400, 400);
     background(0);

function drawlines(){     
     strokeWeight(3);
     stroke(255, 204, 0);
     for(var i=10;i<400;i=i+10){
          line(i,random(0,400),i,400);
     }
}
     drawlines();
}
