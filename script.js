import Camera from "./camera.js";
import World from "./world.js";
import { Ziutek } from "./ziutek.js";

var world = new World();
// var img = new Image();
var ziutek = new Ziutek();
// img.src = "tiles.png";
// imgWidth = img.width; //jakies	duze	rozdzielczosci,	wieksze	niz	ekran
// imgHeight = img.height;

var camera = new Camera();

// function update() {
//   if (dol) {
//     smok.forward();
//   }
//   // if (gora) {smok.back()};
//   // if (gora) {smok.back()};
//   // if (gora) {smok.back()};
// }

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");


let left , right , forward ,back = false;

document.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    case 40:
      ziutek.forward();
      camera.down(c)
      break;
    case 38:
      ziutek.back();
      camera.up(c)
      break;
    case 37:
      ziutek.left();
      camera.left(c);
      break;
    case 39:
      ziutek.right();
      camera.right(c)
      break;
  }
});

//Redraw canvas
function draw() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  world.draw(c);
  ziutek.draw(c);
}

// let secondsPassed;
// let oldTimeStamp;
// let fps;

//Main game loop
function mainLoop() {
  // secondsPassed = (timeStamp - oldTimeStamp) / 1000;
  // oldTimeStamp = timeStamp;

  // Calculate fps
  // fps = Math.round(1 / secondsPassed);
  // console.log("FPS: " + fps);
  // update();
  draw();
  
  requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);
