function setup() {
    createCanvas(400, 400);
    background(240);
    noStroke();

    
    fill(255, 224, 189); 
    ellipse(200, 200, 150, 200); 

 
    fill(0);
    arc(200, 150, 140, 120, 3.14, 0); 

    fill(0);
    rect(150, 160, 30, 5, 3);
    rect(220, 160, 30, 5, 3); 

    // Eyes
    fill(255); // whites
    ellipse(165, 180, 25, 15);
    ellipse(235, 180, 25, 15);

    fill(101, 67, 33);
    ellipse(165, 180, 10, 10);
    ellipse(235, 180, 10, 10);

    fill(0);
    ellipse(165, 180, 5, 5);
    ellipse(235, 180, 5, 5);

    fill(30);
    arc(200, 230, 60, 15, 3.14, 0, CHORD); 

    stroke(150, 0, 0);
    strokeWeight(6);
    noFill();
    arc(200, 240, 40, 10, 0, 3.14); 
  }

  function draw() {
  }
