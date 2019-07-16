function setup(){
createCanvas (600, 600)
background(150);
red = 0;
blue = 255;
}

function draw(){
    fill(red, 0, blue);
    // background(255,0,0)
    rect(0, 0, width,height);
}

function mouseClicked(){
   if (mouseClicked && blue > red){
    red = 255;
    blue = 0;   
   } else if(mouseClicked && red > blue){
    red = 0;
    blue = 255;
   }
}
