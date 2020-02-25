//let = var


let TheCaptainCanMakeitHappen = 120;

let MortalKombat = 275;

let mic;

let eye1;

let eye2;

function setup() {
  
  eye1 = new Eye(0,0); 


createCanvas(400, 400);


  background(160, 160, 160,);
  
mic = new p5.AudioIn()
mic.start();

drawFaces();

drawOther(100, 600);
  
drawEyes();

}

function draw() {
  // console.log("mouse x is: " + mouseX);
  // console.log("mouse y is: " + mouseY);
  // console.log("mic level " + mic.getLevel());
  
  mouseX = map(mic.getLevel(), 0, .2, 345, 500);
  
  wiggling = mouseX;
  
  
  //Front Hair
  fill(0, 0, 0,);
  triangle(mouseX, mouseX, mouseX, 20, 280, 75);
  
  fill(0, mouseY, mouseX) // Left Pupil
  ellipse(180, 150, 20, 20); 
  eye1.display()
}

function mousePressed() {
}

function drawFaces(){
//Face  
fill(96, 73, 200); // Face Color
rect(125, 100, 200, 200, 50, 50, 50, 5);

strokeWeight(3)
  
// Facial Features  
  
fill(205, 102, 102) // Nose
arc(230, 200, 50, 50, 0, PI + QUARTER_PI, CHORD);


  
  
fill(102, 102, 255); //Neck
rect(200, 300, 55, 55);

}

function drawOther(xPos, yPos,){
//Clothing  
  
fill(255, 128, 0); // Kimono 
stroke(255);
strokeWeight(10);
quad(xPos, yPos, 200, 300, 460, 475, 130, 420);
  
strokeWeight(0) 
  
  
// Hair

fill(0, 0, 0); // Hair
rect(TheCaptainCanMakeitHappen, 65, 200, 40, 50, 70, 120, 1);

//Mouth  

fill(255, 51, 51);
arc(220, 250, 80, 80, 0, PI + QUARTER_PI, PIE);
}

function drawEyes() {

//Eyes 
fill(0,0,0,) // Right Eyebrow
rect(MortalKombat, 120, 40, 10);

fill(0,0,0,) // Left Eyebrow
rect(160, 110, 40, 10);

fill(255, 255, 255) // Right Ball
ellipse(275, 150, 50, 30);

fill(255, 255, 255) // Left Ball
ellipse(175, 150, 50, 30);

fill(204, 0, 204) // Right Pupil
ellipse(275, 152, 20, 20); 
}