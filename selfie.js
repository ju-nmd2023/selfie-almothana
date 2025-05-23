function setup() {
    createCanvas(400, 400);
    background(240);
    noStroke();
  
    //  VARIABLES 
    let faceX = 200;
    let faceY = 200;
    let faceWidth = 150;
    let faceHeight = 200;
    let eyeOffsetX = 35;
    let eyeOffsetY = -20;
  
    //  HEAD 
    fill(255, 224, 189); // skin color
    ellipse(faceX, faceY, faceWidth, faceHeight);
  
    // HAIR 
    fill(0);
    arc(faceX, faceY - 50, 140, 120, PI, 0); // top hair
  
    //  EYEBROWS 
    fill(0);
    rect(faceX - eyeOffsetX - 10, faceY - 40, 30, 5, 3);
    rect(faceX + eyeOffsetX - 20, faceY - 40, 30, 5, 3);
  
    // EYES 
    drawEye(faceX - eyeOffsetX, faceY + eyeOffsetY, 1); // left eye
    drawEye(faceX + eyeOffsetX, faceY + eyeOffsetY, 1.2); // right eye scaled
  
    //  NOSE using rotation 
    push();
    translate(faceX, faceY + 10);
    rotate(radians(10));
    fill(255, 200, 170);
    triangle(0, 0, -5, 20, 5, 20);
    pop();
  
    //  MOUTH 
    fill(30);
    arc(faceX, faceY + 40, 60, 15, PI, 0, CHORD); // upper lip
  
    stroke(150, 0, 0);
    strokeWeight(6);
    noFill();
    arc(faceX, faceY + 50, 40, 10, 0, PI); // lower lip
  }
  
  function drawEye(x, y, scaleFactor) {
    push();
    translate(x, y);
    scale(scaleFactor); // scale the entire eye
    fill(255);
    ellipse(0, 0, 25, 15); // white
    fill(101, 67, 33);
    ellipse(0, 0, 10, 10); // iris
    fill(0);
    ellipse(0, 0, 5, 5); // pupil
    pop();
  }
  
  function draw() {
  }
  