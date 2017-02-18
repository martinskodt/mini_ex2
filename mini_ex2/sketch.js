function setup() {
console.log("Hello World");
createCanvas(1000,1000);
background(255)

}

function draw() {
 background(255)
 
//Text
 textSize(60);
 fill(0)
 text("MATRIX",400,50)
 
//Tale bobel
 noFill()
 ellipse(370 + sin(frameCount * 0.01  ) * 600,370,200,100)
 noFill();
 triangle(410+ sin(frameCount * 0.01  ) * 600,415,440+ sin(frameCount * 0.01  ) * 600,405,450+ sin(frameCount * 0.01  ) * 600,440)
 textSize(30);
 fill(0)
 text("Deja vu",325 + sin(frameCount * 0.01  ) * 600,380)
 
 
//legs (front to back)
 fill(0)
 ellipse(520 + sin(frameCount * 0.01  ) * 600,590,20,80)
 ellipse(550 + sin(frameCount * 0.01  ) * 600,590,20,80)
 ellipse(640 + sin(frameCount * 0.01  ) * 600,590,20,80)
 ellipse(680 + sin(frameCount * 0.01  ) * 600,590,20,80)

//body
 stroke(0)
 ellipse(600 + sin(frameCount * 0.01  ) * 600,550,200,100)

//Head
 fill(0)
 stroke(0)
 ellipse(500 + sin(frameCount * 0.01  ) * 600,500,100,100)
//Eyes
 fill(100)
 ellipse(480 + sin(frameCount * 0.01  ) * 600,490,10,15)
 
 fill(100)
 ellipse(520 + sin(frameCount * 0.01  ) * 600,490,10,15)
//Nose
 fill(100)
 ellipse(500 + sin(frameCount * 0.01  ) * 600,510,10,10)
//Ears
 stroke(70)
 fill(230)
 triangle(460 + sin(frameCount * 0.01  ) * 600,470,480 + sin(frameCount * 0.01  ) * 600,455,450 + sin(frameCount * 0.01  ) * 600,450);
 triangle(540 + sin(frameCount * 0.01  ) * 600,470,520 + sin(frameCount * 0.01  ) * 600,455,550 + sin(frameCount * 0.01  ) * 600,450)
//Mouth
 fill(50)
 curve(480 + sin(frameCount * 0.01  ) * 600,480,490 + sin(frameCount * 0.01  ) * 600,530,510 + sin(frameCount * 0.01  ) * 600,530,520 + sin(frameCount * 0.01  ) * 600,480)
 
//Walls
 fill(30,150,30)
 rect(0,0,200,1000)

 fill(30,150,30)
 rect(800,0,200,1000)


}