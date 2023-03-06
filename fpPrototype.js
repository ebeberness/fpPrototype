let t = 0;
let lines = [];
let isDrawing = false;
let startX, startY;
let slider;
let val;
let clearPressed = false;
let linesPressed = false;
let newCanvas;
let circlePressed = false;
let circles = false;

function setup() {
  
  createCanvas(400, 400);
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
  
  saveButton = createButton('Save');
  saveButton.position(450, 10);
  saveButton.mousePressed(saveArt);
  
  clearButton = createButton('Clear');
  clearButton.position(500, 10);
  clearButton.mousePressed(erased);
  
  // lineButton = createButton ('Lines');
  // lineButton.position(300, 10);
  // lineButton.mousePressed(lineIsPressed);
  
  // circleButton = createButton ('Circles');
  // circleButton.position(300, 10);
  // circleButton.mousePressed(circleIsPressed);  
}

function draw() {
  clear();
  val = slider.value();
  background(val);
  
  //if (linesPressed == true){
    drawLine();
  //}
  
  
  if(clearPressed == true){
    erased();
   }
  
  // if(circleIsPressed == true){
  //   drawCircles();
  // }
  
  }
  
function drawLine() {
 noStroke();
  if (mouseIsPressed) {
    if (isDrawing) {
      lines.push({
        startX: mouseX,
        startY: mouseY,
        endX: pmouseX,
        endY: pmouseY,
      });
    }
    isDrawing = true;
      }

  if (isDrawing) {
    stroke(255);
    line(startX, startY, mouseX, mouseY);
  }
  
  for (const lin of lines) {
    line(lin.startX, lin.startY, lin.endX, lin.endY);
  }
}

// function clearIsPressed(){
//   clearPressed = true;
// }

function lineIsPressed(){
  linePressed = true;
  //isDrawing = true;
}

function erased() {
      lines=[];
      clearPressed = false;
}

function saveArt() {
  saveCanvas(canvas, 'myCanvas', 'jpg');
}

// function drawCircles(){
//     if (mouseIsPressed == true) {
//       fill(brushColor);
//       ellipse(mouseX, mouseY, 10, 10);
      
//   }

