function setup() {
console.log("Hello World");
createCanvas(1000,1000);
background(230)

}

function draw() {
 

 //Head
 fill(200,200,70)
 stroke(200,200,70)
 ellipse(500,500,100,100)
 //Eyes
 fill(20)
 ellipse(480,490,10,15)
 fill(20)
 ellipse(520,490,10,15)
 //Nose
 ellipse(500,510,10,10)
 //Ears
 stroke(0)
 triangle(460,470,480,455,450,450);
 triangle(540,470,520,455,550,450)

//mouth
curve(480,480,490,530,510,530,520,480)
 
 
}