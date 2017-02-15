function setup() {
  createCanvas(400,400);
  colorMode(HSB);
  background (255);
  
  fill(0);
  
  for (var y=20;y<=200; y=y+20){
    for (var x = y; x<=400-y;x=x+20){
      ellipse(x,y,18,18);
    }
  }
  
}

