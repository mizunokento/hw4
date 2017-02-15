function setup(){
  createCanvas(400,400);
  colorMode(HSB);
  noStroke();
  fill(255);
  background(0);
  
  for (var y=20;y<=380; y=y+20){
    var startX = y;
    var endX = 400-startX;
    if (y<=200){
    for (var x = startX; x<=endX;x=x+20){
      ellipse(x,y,18,18);
    }
  }else {
    for(var x = endX; x <= startX; x = x+20){
      ellipse(x,y,18,18);
    }
    }
  }
}
