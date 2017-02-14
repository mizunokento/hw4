function setup() {
  createCanvas(400, 400);
     background(0);

function drawlines(){     
     strokeWeight(3);
     stroke(255, 204, 0);
     for(var i=25;i<376;i=i+10){
          line(i,25,i,375);
          line(25,i,375,i);
     }
}
     drawlines();
}
