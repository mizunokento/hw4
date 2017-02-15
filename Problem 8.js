//Diagonal Lines

function setup() {
  createCanvas(400, 400);
     background(0);     
     strokeWeight(2);
     stroke(255, 204, 0);
     for(var i=25;i<375;i=i+10){
     line(25,i,i,25);
     }
     for(var i=25;i<375;i=i+10){
         line(i,375,375,i);
     }
}
